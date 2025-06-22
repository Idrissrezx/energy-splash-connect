
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    club: [
      { name: "About Us", href: "#about" },
      { name: "Our Coaches", href: "#coaches" },
      { name: "Training Programs", href: "#" },
      { name: "Facilities", href: "#" }
    ],
    membership: [
      { name: "Pricing Plans", href: "#pricing" },
      { name: "Registration", href: "#" },
      { name: "Family Packages", href: "#" },
      { name: "Special Offers", href: "#" }
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "FAQ", href: "#" },
      { name: "Support Center", href: "#" },
      { name: "Feedback", href: "#" }
    ]
  };

  return (
    <footer className="bg-energy-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-energy-accent mb-4">Energy Guelma</h3>
              <p className="text-gray-300 leading-relaxed">
                Professional swimming club dedicated to excellence in aquatic sports and community building in Guelma, Algeria.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-energy-accent flex-shrink-0" />
                <span className="text-sm text-gray-300">Guelma, Algeria</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-energy-accent flex-shrink-0" />
                <span className="text-sm text-gray-300">+213 XX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-energy-accent flex-shrink-0" />
                <span className="text-sm text-gray-300">info@energyguelma.dz</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Club</h4>
            <ul className="space-y-2">
              {footerLinks.club.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-energy-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Membership</h4>
            <ul className="space-y-2">
              {footerLinks.membership.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-energy-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-energy-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="py-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-energy-accent transition-colors duration-200">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-energy-accent transition-colors duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-energy-accent transition-colors duration-200">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-300 text-sm mb-2">
                Ready to dive in? Join Energy Guelma today!
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-energy-accent hover:bg-energy-accent/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              <p>&copy; {currentYear} Energy Guelma Swimming Club. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-energy-accent transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-energy-accent transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-energy-accent transition-colors duration-200">
                Legal Notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
