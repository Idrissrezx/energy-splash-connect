-- Enable Row Level Security on users table
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Create policies for users table
-- Users can view their own data
CREATE POLICY "Users can view own profile" 
ON public.users 
FOR SELECT 
USING (auth.uid() = id);

-- Create a function to check if user has admin role (security definer to avoid RLS recursion)
CREATE OR REPLACE FUNCTION public.is_admin(user_id uuid)
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.users 
    WHERE id = user_id AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- Admins can view all users
CREATE POLICY "Admins can view all users" 
ON public.users 
FOR SELECT 
USING (public.is_admin(auth.uid()));

-- Users can update their own profile (except role)
CREATE POLICY "Users can update own profile" 
ON public.users 
FOR UPDATE 
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id AND OLD.role = NEW.role);

-- Only admins can update user roles
CREATE POLICY "Admins can update user roles" 
ON public.users 
FOR UPDATE 
USING (public.is_admin(auth.uid()));

-- Only admins can insert new users
CREATE POLICY "Admins can insert users" 
ON public.users 
FOR INSERT 
WITH CHECK (public.is_admin(auth.uid()));

-- Only admins can delete users
CREATE POLICY "Admins can delete users" 
ON public.users 
FOR DELETE 
USING (public.is_admin(auth.uid()));