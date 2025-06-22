
import { Calendar, Users, Trophy, Megaphone } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Swimming Season Registration Open",
      date: "2024-01-15",
      category: "Registration",
      icon: Users,
      content: "Registration for the new swimming season is now open! Join Energy Guelma and start your swimming journey with professional coaches and modern facilities.",
      important: true
    },
    {
      id: 2,
      title: "Regional Championship Results",
      date: "2024-01-10",
      category: "Competition",
      icon: Trophy,
      content: "Our swimmers achieved excellent results at the Regional Championship. Congratulations to all participants for their dedication and hard work!"
    },
    {
      id: 3,
      title: "Training Schedule Update",
      date: "2024-01-08",
      category: "Schedule",
      icon: Calendar,
      content: "Please note the updated training schedule for all age groups. Check with your coach for specific timing changes."
    },
    {
      id: 4,
      title: "Special Training Camp Announcement",
      date: "2024-01-05",
      category: "Training",
      icon: Megaphone,
      content: "We're organizing a special intensive training camp during the school holidays. Limited spots available - register early!"
    }
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-energy-primary mb-4">Latest News</h2>
          <p className="text-xl text-energy-text max-w-3xl mx-auto">
            Stay updated with the latest announcements, competitions, and training schedules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`bg-energy-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  item.important ? 'border-l-4 border-energy-accent' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-energy-accent rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-energy-accent bg-energy-accent/10 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-energy-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-energy-text leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-energy-primary rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to stay updated?</h3>
            <p className="text-lg mb-6">
              Follow us on social media for real-time updates and behind-the-scenes content.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <span className="font-semibold">Facebook</span>
              </div>
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <span className="font-semibold">Instagram</span>
              </div>
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <span className="font-semibold">YouTube</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
