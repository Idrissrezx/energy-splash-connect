
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(3, 50, 131, 0.7), rgba(3, 50, 131, 0.7)), url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1950&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Welcome to
            <span className="block text-energy-accent">Energy Guelma</span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Professional swimming club management system in Algeria. 
            Train with the best coaches, track your progress, and achieve your swimming goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-energy-accent hover:bg-energy-accent/90 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Join Our Club
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-energy-primary px-8 py-3 text-lg font-semibold transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="animate-slide-in-left">
              <div className="text-3xl font-bold text-energy-accent mb-2">500+</div>
              <div className="text-lg text-gray-200">Active Members</div>
            </div>
            <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-energy-accent mb-2">15+</div>
              <div className="text-lg text-gray-200">Professional Coaches</div>
            </div>
            <div className="animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-energy-accent mb-2">10+</div>
              <div className="text-lg text-gray-200">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
