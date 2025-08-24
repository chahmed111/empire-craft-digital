import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-home.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern luxury home with beautiful windows and doors"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 to-brand-blue-dark/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Elevate Your 
            <span className="block text-accent">Living Experience</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Transform your home with premium quality doors and windows. 
            Professional installation, exceptional service, and unbeatable value.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get a Free Quote
              <ArrowRight size={20} />
            </button>
            
            <a 
              href="tel:+447435854263"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Call Now: +44 743 585 4263
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span>Energy Efficient</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span>Affordable Prices</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span>Expert Installation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;