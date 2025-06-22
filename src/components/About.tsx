
const About = () => {
  return (
    <section id="about" className="py-20 bg-energy-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-energy-primary mb-4">Who We Are</h2>
          <p className="text-xl text-energy-text max-w-3xl mx-auto">
            Energy Guelma is a premier swimming club dedicated to excellence in aquatic sports and community building.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold text-energy-primary mb-4">Our Mission</h3>
              <p className="text-energy-text leading-relaxed">
                To provide world-class swimming training and management services that empower athletes of all ages 
                to achieve their potential while building a strong, supportive community in Guelma, Algeria.
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-semibold text-energy-primary mb-4">Our Values</h3>
              <ul className="space-y-3 text-energy-text">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-energy-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Excellence:</strong> We strive for the highest standards in training and performance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-energy-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Community:</strong> Building lasting relationships and supporting each other</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-energy-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Growth:</strong> Continuous improvement for athletes and coaches alike</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-energy-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Integrity:</strong> Maintaining the highest ethical standards in all we do</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <img
              src="https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80"
              alt="Swimming training"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-3xl font-bold text-energy-accent mb-2">2013</div>
            <div className="text-lg font-semibold text-energy-primary mb-2">Established</div>
            <p className="text-energy-text">Founded with a vision to transform swimming in Guelma</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-lg animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-3xl font-bold text-energy-accent mb-2">Modern</div>
            <div className="text-lg font-semibold text-energy-primary mb-2">Facilities</div>
            <p className="text-energy-text">State-of-the-art swimming facilities and equipment</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-lg animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="text-3xl font-bold text-energy-accent mb-2">Award</div>
            <div className="text-lg font-semibold text-energy-primary mb-2">Winning</div>
            <p className="text-energy-text">Multiple championships and recognition in national competitions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
