
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'الرئيسية', href: '#home', nameEn: 'Home' },
    { name: 'من نحن', href: '#about', nameEn: 'About' },
    { name: 'المدربون', href: '#coaches', nameEn: 'Coaches' },
    { name: 'الأخبار', href: '#news', nameEn: 'News' },
    { name: 'الأسعار', href: '#pricing', nameEn: 'Pricing' },
    { name: 'اتصل بنا', href: '#contact', nameEn: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-energy-primary">
              Energy Guelma
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-energy-text hover:text-energy-primary transition-colors duration-200 font-medium"
              >
                {item.nameEn}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button className="bg-energy-accent hover:bg-energy-accent/90 text-white">
                Join Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-energy-text hover:text-energy-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-energy-text hover:text-energy-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.nameEn}
                </a>
              ))}
              <div className="pt-4">
                <Link to="/login">
                  <Button className="w-full bg-energy-accent hover:bg-energy-accent/90 text-white">
                    Join Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
