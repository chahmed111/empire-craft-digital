import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const Windows = () => {
  const windowTypes = [
    {
      title: "uPVC Windows",
      benefits: ["Energy Efficient", "Low Maintenance", "Secure", "Cost Effective"],
      description: "Durable and energy-efficient windows perfect for modern homes"
    },
    {
      title: "Bay Windows",
      benefits: ["Extra Space", "Natural Light", "Street Views", "Character"],
      description: "Classic bay windows that add character and space to your home"
    },
    {
      title: "Double Glaze",
      benefits: ["Heat Retention", "Noise Reduction", "Energy Savings", "Comfort"],
      description: "Superior insulation with double glazing technology"
    },
    {
      title: "Flush Casement",
      benefits: ["Sleek Design", "Easy Operation", "Weather Tight", "Modern Look"],
      description: "Contemporary flush casement windows for a modern aesthetic"
    },
    {
      title: "Sash Windows",
      benefits: ["Traditional Style", "Easy Cleaning", "Ventilation", "Heritage"],
      description: "Classic sash windows maintaining traditional charm"
    },
    {
      title: "Porch Windows",
      benefits: ["Natural Light", "Weather Protection", "Extended Living", "Value Add"],
      description: "Enhance your porch with our specialized window solutions"
    },
    {
      title: "Sky Windows",
      benefits: ["Natural Light", "Ventilation", "Energy Efficient", "Weather Resistant"],
      description: "Bring natural light from above with our skylight windows"
    },
    {
      title: "Triple Glazing",
      benefits: ["Maximum Insulation", "Noise Reduction", "Energy Savings", "Comfort"],
      description: "Ultimate energy efficiency with triple glazing technology"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Premium Windows</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Transform your home with our energy-efficient, stylish window solutions
            </p>
          </div>
        </section>

        {/* Windows Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {windowTypes.map((window, index) => (
                <div key={index} className="card-elegant hover:shadow-medium group">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{window.title}</h3>
                  <p className="text-muted-foreground mb-6">{window.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {window.benefits.map((benefit, benefitIndex) => (
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
            <h2 className="text-4xl font-bold mb-6">Ready to Upgrade Your Windows?</h2>
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

export default Windows;