import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { Users, Award, Shield, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Empire Doors & Windows</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Transforming homes across the UK with premium quality doors and windows since 2010
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="text-xl leading-relaxed mb-6">
                  Founded in 2010, Empire Doors & Windows has been at the forefront of home improvement 
                  across the United Kingdom. What started as a small family business has grown into one 
                  of the most trusted names in the industry.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Our commitment to excellence, combined with our passion for transforming homes, has 
                  helped thousands of families create the living spaces they've always dreamed of. 
                  We believe that every home deserves the best, and that's exactly what we deliver.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">Why Choose Empire?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Expert Craftsmanship",
                  description: "15+ years of experience with certified professionals"
                },
                {
                  icon: Shield,
                  title: "Quality Guarantee",
                  description: "10-year warranty on all installations and materials"
                },
                {
                  icon: Clock,
                  title: "Timely Service",
                  description: "On-time delivery and efficient installation process"
                },
                {
                  icon: Users,
                  title: "Customer First",
                  description: "Dedicated support team and after-sales service"
                }
              ].map((item, index) => (
                <div key={index} className="card-elegant text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 gradient-hero text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8">Get your free consultation today</p>
            <button className="btn-accent text-lg px-8 py-4">
              Get Your Free Quote
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;