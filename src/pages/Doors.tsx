import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const Doors = () => {
  const doorTypes = [
    {
      title: "Single Doors",
      benefits: ["Enhanced Security", "Energy Efficient", "Low Maintenance", "Multiple Styles"],
      description: "Classic single doors perfect for any home entrance"
    },
    {
      title: "French Doors",
      benefits: ["Natural Light", "Garden Access", "Elegant Design", "Space Enhancing"],
      description: "Elegant French doors connecting your home to outdoor spaces"
    },
    {
      title: "Sliding Doors",
      benefits: ["Space Saving", "Modern Design", "Large Openings", "Easy Operation"],
      description: "Contemporary sliding doors for seamless indoor-outdoor living"
    },
    {
      title: "Composite Doors",
      benefits: ["Superior Security", "Weather Resistant", "Low Maintenance", "Stylish"],
      description: "Premium composite doors combining security and style"
    },
    {
      title: "Bi-Fold Doors",
      benefits: ["Maximum Opening", "Flexible Space", "Modern Look", "Natural Light"],
      description: "Innovative bi-fold doors creating expansive openings"
    },
    {
      title: "Composite French",
      benefits: ["Best of Both", "Security", "Elegance", "Durability"],
      description: "Combining the elegance of French doors with composite security"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Stylish Doors</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Enhance your home's security and style with our premium door collection
            </p>
          </div>
        </section>

        {/* Doors Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doorTypes.map((door, index) => (
                <div key={index} className="card-elegant hover:shadow-medium group">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{door.title}</h3>
                  <p className="text-muted-foreground mb-6">{door.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {door.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full btn-secondary group-hover:bg-primary group-hover:text-white transition-all">
                    Request Quote
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Transform Your Entrance</h2>
            <p className="text-xl mb-8 text-muted-foreground">Get a free consultation and quote today</p>
            <button className="btn-hero">Get Your Free Quote</button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Doors;