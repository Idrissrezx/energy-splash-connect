
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    isSponsorship: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Energy Guelma Swimming Club", "Guelma, Algeria"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+213 XX XXX XXXX", "+213 XX XXX XXXX"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@energyguelma.dz", "contact@energyguelma.dz"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 6:00 AM - 10:00 PM", "Sat-Sun: 8:00 AM - 8:00 PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-energy-primary mb-4">Get In Touch</h2>
          <p className="text-xl text-energy-text max-w-3xl mx-auto">
            Ready to start your swimming journey? Contact us today or visit our facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-energy-primary mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-energy-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-energy-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-energy-primary mb-1">{item.title}</h4>
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-energy-text text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold text-energy-primary mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-energy-primary rounded-lg flex items-center justify-center hover:bg-energy-primary/90 transition-colors">
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-energy-primary rounded-lg flex items-center justify-center hover:bg-energy-primary/90 transition-colors">
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-energy-primary rounded-lg flex items-center justify-center hover:bg-energy-primary/90 transition-colors">
                  <Youtube className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            {/* Sponsorship CTA */}
            <div className="bg-energy-background rounded-lg p-6">
              <h3 className="text-xl font-bold text-energy-primary mb-3">Become a Sponsor</h3>
              <p className="text-energy-text mb-4">
                Support our young athletes and be part of their swimming journey. Partner with Energy Guelma today.
              </p>
              <Button className="bg-energy-accent hover:bg-energy-accent/90 text-white">
                Learn About Sponsorship
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Select a subject</option>
                  <option value="membership">Membership Inquiry</option>
                  <option value="training">Training Information</option>
                  <option value="competition">Competition Details</option>
                  <option value="sponsorship">Sponsorship Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  id="sponsorship"
                  name="isSponsorship"
                  type="checkbox"
                  checked={formData.isSponsorship}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-energy-accent border-gray-300 rounded focus:ring-energy-accent"
                />
                <Label htmlFor="sponsorship" className="text-sm">
                  I'm interested in sponsorship opportunities
                </Label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-energy-primary hover:bg-energy-primary/90 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
