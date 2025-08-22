import { ArrowRight } from 'lucide-react';
import windowsImage from '@/assets/windows-category.jpg';
import doorsImage from '@/assets/doors-category.jpg';

const FeaturedCategories = () => {
  const categories = [
    {
      title: "Premium Windows",
      description: "Energy-efficient uPVC, bay, double glaze, and more. Transform your view and save on energy bills.",
      image: windowsImage,
      link: "/windows",
      features: ["A+ Energy Rating", "10-Year Warranty", "Professional Installation", "Free Consultation"]
    },
    {
      title: "Stylish Doors",
      description: "Composite, French, bi-fold, and sliding doors. Enhance your home's security and style.",
      image: doorsImage,
      link: "/doors",
      features: ["Enhanced Security", "Weather Resistant", "Multiple Styles", "Expert Fitting"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Transform Your Home
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our premium range of windows and doors designed to elevate your living experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-medium hover:shadow-strong transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-3">{category.title}</h3>
                <p className="text-gray-200 mb-6">{category.description}</p>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href={category.link}
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Explore {category.title}
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;