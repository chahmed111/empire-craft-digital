import { Phone, ArrowRight, Shield, Clock } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform 
            <span className="block text-accent">Your Home?</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-100 max-w-3xl mx-auto">
            Join thousands of satisfied customers who chose Empire Doors & Windows. 
            Get your free consultation today!
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center gap-3 text-lg">
              <Shield className="text-accent" size={24} />
              <span>10-Year Guarantee</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <Clock className="text-accent" size={24} />
              <span>Quick Installation</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <ArrowRight className="text-accent" size={24} />
              <span>Free Consultation</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <button className="bg-accent hover:bg-accent/90 text-white px-10 py-5 rounded-lg font-bold text-xl flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Get Your Free Quote
              <ArrowRight size={24} />
            </button>
            
            <a 
              href="tel:+447435854263"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 px-10 py-5 rounded-lg font-bold text-xl flex items-center gap-3 transition-all duration-300"
            >
              <Phone size={24} />
              Call: +44 743 585 4263
            </a>
          </div>

          <p className="text-gray-200 text-lg">
            📞 <strong>Available 7 days a week</strong> | 🚀 <strong>Same-day quotes</strong> | 💎 <strong>Premium quality guaranteed</strong>
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
      </div>
    </section>
  );
};

export default FinalCTA;