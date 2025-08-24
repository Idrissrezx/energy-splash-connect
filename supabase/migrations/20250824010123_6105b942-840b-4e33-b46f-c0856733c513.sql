-- Enable Row Level Security on all tables and create comprehensive policies

-- First, enable RLS on all tables
ALTER TABLE public.athletes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pricing ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Create user role enum and role management system
CREATE TYPE public.app_role AS ENUM ('admin', 'coach', 'parent', 'guest');

-- Create user_roles table for proper role management
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL DEFAULT 'guest',
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now(),
    UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check user roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.get_user_role(user_uuid UUID)
RETURNS app_role
LANGUAGE SQL
SECURITY DEFINER
STABLE
AS $$
  SELECT role FROM public.user_roles WHERE user_id = user_uuid LIMIT 1;
$$;

-- Helper function to check if user has specific role
CREATE OR REPLACE FUNCTION public.has_role(user_uuid UUID, check_role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = user_uuid AND role = check_role
  );
$$;

-- Create profiles table for additional user data
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT,
    phone TEXT,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Create profile
  INSERT INTO public.profiles (id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
  
  -- Assign default guest role
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'guest');
  
  RETURN NEW;
END;
$$;

-- Trigger to create profile and role on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- RLS Policies for users table
CREATE POLICY "Users can view their own profile" ON public.users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.users
  FOR UPDATE USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id AND role = (SELECT role FROM public.users WHERE id = auth.uid()));

CREATE POLICY "Admins can view all users" ON public.users
  FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert users" ON public.users
  FOR INSERT WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update all users" ON public.users
  FOR UPDATE USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete users" ON public.users
  FOR DELETE USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for profiles table
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON public.profiles
  FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for user_roles table
CREATE POLICY "Users can view their own roles" ON public.user_roles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all roles" ON public.user_roles
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for athletes table
CREATE POLICY "Parents can view their children" ON public.athletes
  FOR SELECT USING (auth.uid() = parent_id OR public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'coach'));

CREATE POLICY "Parents can insert their children" ON public.athletes
  FOR INSERT WITH CHECK (auth.uid() = parent_id OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Parents can update their children" ON public.athletes
  FOR UPDATE USING (auth.uid() = parent_id OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage all athletes" ON public.athletes
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for messages table
CREATE POLICY "Users can view their own messages" ON public.messages
  FOR SELECT USING (auth.uid() = sender_id OR auth.uid() = receiver_id OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Users can send messages" ON public.messages
  FOR INSERT WITH CHECK (auth.uid() = sender_id);

CREATE POLICY "Admins can manage all messages" ON public.messages
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for registrations table
CREATE POLICY "Parents can view their registrations" ON public.registrations
  FOR SELECT USING (auth.uid() = parent_id OR public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'coach'));

CREATE POLICY "Parents can create registrations" ON public.registrations
  FOR INSERT WITH CHECK (auth.uid() = parent_id OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage all registrations" ON public.registrations
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for media table
CREATE POLICY "Users can view related media" ON public.media
  FOR SELECT USING (
    auth.uid() = uploader_id OR 
    public.has_role(auth.uid(), 'admin') OR 
    public.has_role(auth.uid(), 'coach') OR
    EXISTS (SELECT 1 FROM public.athletes WHERE id = media.athlete_id AND parent_id = auth.uid())
  );

CREATE POLICY "Users can upload media" ON public.media
  FOR INSERT WITH CHECK (auth.uid() = uploader_id);

CREATE POLICY "Admins can manage all media" ON public.media
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for news table
CREATE POLICY "Anyone can read public news" ON public.news
  FOR SELECT USING (visibility = 'public' OR public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'coach') OR public.has_role(auth.uid(), 'parent'));

CREATE POLICY "Admins and coaches can create news" ON public.news
  FOR INSERT WITH CHECK (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'coach'));

CREATE POLICY "Authors can update their news" ON public.news
  FOR UPDATE USING (auth.uid() = author_id OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete news" ON public.news
  FOR DELETE USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for pricing table
CREATE POLICY "Anyone can read pricing" ON public.pricing
  FOR SELECT USING (true);

CREATE POLICY "Admins can manage pricing" ON public.pricing
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));