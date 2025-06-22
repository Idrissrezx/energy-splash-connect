
import { Button } from '@/components/ui/button';
import { Check, Star, Users } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "Little Swimmers",
      age: "Under 6 years",
      price: "8,000",
      currency: "DA",
      period: "per month",
      features: [
        "Water safety introduction",
        "Basic swimming skills",
        "Fun water activities",
        "Small group sessions (max 6 kids)",
        "Qualified instructors",
        "Parent supervision welcome"
      ],
      recommended: false,
      icon: Star
    },
    {
      id: 2,
      name: "Young Athletes",
      age: "6-13 years",
      price: "12,000",
      currency: "DA",
      period: "per month",
      features: [
        "Structured swimming lessons",
        "Stroke technique development",
        "Fitness and endurance training",
        "Competition preparation",
        "Progress tracking",
        "Access to club events"
      ],
      recommended: true,
      icon: Users
    },
    {
      id: 3,
      name: "Family Package",
      age: "3+ children",
      price: "Custom",
      currency: "Pricing",
      period: "contact us",
      features: [
        "Special family discount",
        "Multiple children enrolled",
        "Flexible payment options",
        "All age group benefits",
        "Priority booking",
        "Family events access"
      ],
      recommended: false,
      icon: Users
    }
  ];

  const specialOffers = [
    {
      title: "Female Athletes Program",
      description: "Special pricing for female athletes up to age 19",
      details: "Contact us for customized rates and training programs designed specifically for young female swimmers."
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-energy-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-energy-primary mb-4">Membership Plans</h2>
          <p className="text-xl text-energy-text max-w-3xl mx-auto">
            Choose the perfect plan for your swimming journey. All plans include access to our modern facilities and expert coaching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                  plan.recommended ? 'ring-2 ring-energy-accent scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-energy-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-energy-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-energy-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-energy-primary mb-2">{plan.name}</h3>
                    <p className="text-energy-text">{plan.age}</p>
                  </div>

                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-energy-primary">{plan.price}</span>
                      <span className="text-lg text-energy-text ml-2">{plan.currency}</span>
                    </div>
                    <p className="text-energy-text mt-2">{plan.period}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-energy-accent mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-energy-text">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      plan.recommended 
                        ? 'bg-energy-accent hover:bg-energy-accent/90' 
                        : 'bg-energy-primary hover:bg-energy-primary/90'
                    } text-white`}
                  >
                    {plan.price === 'Custom' ? 'Contact Us' : 'Choose Plan'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Offers */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-energy-primary text-center mb-8">Special Programs</h3>
          {specialOffers.map((offer, index) => (
            <div key={index} className="border-l-4 border-energy-accent pl-6 py-4">
              <h4 className="text-xl font-semibold text-energy-primary mb-2">{offer.title}</h4>
              <p className="text-energy-text mb-2">{offer.description}</p>
              <p className="text-sm text-gray-600">{offer.details}</p>
            </div>
          ))}
        </div>

        {/* Payment Info */}
        <div className="text-center mt-12">
          <div className="bg-energy-primary rounded-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-4">Flexible Payment Options</h3>
            <p className="mb-4">We accept various payment methods for your convenience:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>BaridiMob</div>
              <div>MyFin</div>
              <div>Cash Payment</div>
              <div>Bank Transfer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
