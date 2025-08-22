import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Work Gallery</h1>
            <p className="text-xl max-w-3xl mx-auto">
              See the transformations we've created for our satisfied customers
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <div key={item} className="card-elegant hover:shadow-medium transition-all duration-300">
                  <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground">Project {item}</span>
                  </div>
                  <h3 className="font-semibold mb-2">Window Installation Project</h3>
                  <p className="text-sm text-muted-foreground">Modern uPVC windows installation in Manchester</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Ready for Your Transformation?</h2>
            <p className="text-xl mb-8 text-muted-foreground">Let's make your home the next success story</p>
            <button className="btn-hero">Get Your Free Quote</button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;