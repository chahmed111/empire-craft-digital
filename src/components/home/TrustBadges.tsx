import { Shield, Award, DollarSign, Users } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Energy Efficient",
      description: "A+ rated windows and doors for maximum energy savings"
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "10-year warranty on all installations with premium materials"
    },
    {
      icon: DollarSign,
      title: "Affordable Prices",
      description: "Competitive pricing with flexible payment options available"
    },
    {
      icon: Users,
      title: "Expert Installation",
      description: "Certified professionals with 15+ years of experience"
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div 
                key={index}
                className="card-elegant text-center hover:shadow-medium group transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <IconComponent size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {badge.title}
                </h3>
                <p className="text-muted-foreground">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;