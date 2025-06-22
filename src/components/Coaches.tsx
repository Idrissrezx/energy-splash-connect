
import { useState } from 'react';

const Coaches = () => {
  const [hoveredCoach, setHoveredCoach] = useState<number | null>(null);

  const coaches = [
    {
      id: 1,
      name: "Ahmed Benali",
      title: "Head Coach & Director",
      experience: "15+ years",
      specialization: "Competitive Swimming",
      achievements: [
        "National Swimming Championship Winner",
        "Certified Level 4 Swimming Instructor",
        "Former Olympic Training Camp Coach"
      ],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Fatima Khelifi",
      title: "Youth Development Coach",
      experience: "8+ years",
      specialization: "Children & Beginners",
      achievements: [
        "Specialized in Teaching Children Under 12",
        "Water Safety Instructor Certified",
        "Regional Youth Coach of the Year 2022"
      ],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Omar Lakehal",
      title: "Performance Coach",
      experience: "12+ years",
      specialization: "Advanced Techniques",
      achievements: [
        "Former Professional Swimmer",
        "Sports Science Degree",
        "Strength & Conditioning Specialist"
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      name: "Amina Bouzid",
      title: "Rehabilitation Coach",
      experience: "10+ years",
      specialization: "Therapeutic Swimming",
      achievements: [
        "Physical Therapy Background",
        "Aquatic Rehabilitation Specialist",
        "Medical Swimming Program Developer"
      ],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="coaches" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-energy-primary mb-4">Our Expert Coaches</h2>
          <p className="text-xl text-energy-text max-w-3xl mx-auto">
            Meet our team of certified professionals dedicated to helping you achieve your swimming goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach, index) => (
            <div
              key={coach.id}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              onMouseEnter={() => setHoveredCoach(coach.id)}
              onMouseLeave={() => setHoveredCoach(null)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-energy-primary/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-energy-primary mb-1">{coach.name}</h3>
                <p className="text-energy-accent font-semibold mb-2">{coach.title}</p>
                <p className="text-energy-text mb-2">Experience: {coach.experience}</p>
                <p className="text-sm text-energy-text mb-4">Specialization: {coach.specialization}</p>
                
                {/* Achievements - shown on hover */}
                <div className={`transition-all duration-300 ${
                  hoveredCoach === coach.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-semibold text-energy-primary mb-2">Achievements:</h4>
                    <ul className="text-sm text-energy-text space-y-1">
                      {coach.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-energy-accent rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-energy-text mb-6">
            All our coaches are certified professionals with extensive experience in competitive and recreational swimming.
          </p>
          <div className="bg-energy-background rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-energy-primary mb-4">Why Choose Our Coaches?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-energy-primary mb-2">Certified Excellence</h4>
                <p className="text-energy-text text-sm">All coaches hold national and international certifications</p>
              </div>
              <div>
                <h4 className="font-semibold text-energy-primary mb-2">Personalized Training</h4>
                <p className="text-energy-text text-sm">Customized programs for each swimmer's goals and ability</p>
              </div>
              <div>
                <h4 className="font-semibold text-energy-primary mb-2">Ongoing Support</h4>
                <p className="text-energy-text text-sm">Continuous mentorship and progress tracking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coaches;
