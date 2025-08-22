import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Manchester",
      rating: 5,
      text: "Absolutely thrilled with our new windows! The team was professional, prompt, and the quality is outstanding. Our energy bills have already decreased significantly.",
      service: "uPVC Windows Installation"
    },
    {
      name: "Michael Brown",
      location: "Birmingham",
      rating: 5,
      text: "Empire Doors & Windows transformed our home with beautiful French doors. The installation was seamless and the customer service was exceptional throughout.",
      service: "French Doors Installation"
    },
    {
      name: "Emma Wilson",
      location: "Leeds",
      rating: 5,
      text: "From consultation to completion, everything was perfect. The team helped us choose the right windows for our period home and the results are stunning.",
      service: "Sash Windows Restoration"
    },
    {
      name: "David Taylor",
      location: "Liverpool",
      rating: 5,
      text: "Great value for money and excellent workmanship. Our composite front door looks amazing and feels much more secure. Highly recommended!",
      service: "Composite Door Installation"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - see what our satisfied customers have to say about their experience
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="card-elegant bg-white text-center relative overflow-hidden">
            <div className="absolute top-6 left-6 text-primary/20">
              <Quote size={48} />
            </div>
            
            <div className="pt-12 pb-8 px-8">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-accent fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                "{testimonials[currentSlide].text}"
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-border pt-6">
                <div className="font-semibold text-lg text-foreground">
                  {testimonials[currentSlide].name}
                </div>
                <div className="text-muted-foreground mb-2">
                  {testimonials[currentSlide].location}
                </div>
                <div className="text-sm text-primary font-medium">
                  {testimonials[currentSlide].service}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-medium hover:shadow-strong p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} className="text-primary" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-medium hover:shadow-strong p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} className="text-primary" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-primary' : 'bg-border hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;