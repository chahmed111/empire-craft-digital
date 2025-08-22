import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      location: "Manchester",
      rating: 5,
      date: "March 2024",
      text: "Absolutely thrilled with our new windows! The team was professional, prompt, and the quality is outstanding. Our energy bills have already decreased significantly.",
      service: "uPVC Windows Installation"
    },
    {
      name: "Michael Brown",
      location: "Birmingham", 
      rating: 5,
      date: "February 2024",
      text: "Empire Doors & Windows transformed our home with beautiful French doors. The installation was seamless and the customer service was exceptional throughout.",
      service: "French Doors Installation"
    },
    {
      name: "Emma Wilson",
      location: "Leeds",
      rating: 5,
      date: "January 2024",
      text: "From consultation to completion, everything was perfect. The team helped us choose the right windows for our period home and the results are stunning.",
      service: "Sash Windows Restoration"
    },
    {
      name: "David Taylor", 
      location: "Liverpool",
      rating: 5,
      date: "December 2023",
      text: "Great value for money and excellent workmanship. Our composite front door looks amazing and feels much more secure. Highly recommended!",
      service: "Composite Door Installation"
    },
    {
      name: "Lisa Anderson",
      location: "Sheffield",
      rating: 5,
      date: "November 2023", 
      text: "Professional service from start to finish. The bi-fold doors have completely opened up our living space. Couldn't be happier with the result.",
      service: "Bi-Fold Doors Installation"
    },
    {
      name: "James Mitchell",
      location: "Newcastle",
      rating: 5,
      date: "October 2023",
      text: "The quality of the triple glazing is exceptional. Our home is now much warmer and quieter. The installation team was courteous and efficient.",
      service: "Triple Glazing Installation"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Customer Reviews</h1>
            <p className="text-xl max-w-3xl mx-auto">
              See what our satisfied customers say about their experience with Empire Doors & Windows
            </p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div key={index} className="card-elegant hover:shadow-medium">
                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-accent fill-current" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-foreground mb-6 leading-relaxed">
                    "{review.text}"
                  </blockquote>

                  {/* Service */}
                  <div className="text-sm text-primary font-medium mb-4">
                    {review.service}
                  </div>

                  {/* Author Info */}
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">
                      {review.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {review.location} • {review.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 gradient-hero text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Join Our Happy Customers</h2>
            <p className="text-xl mb-8">Get your free consultation today and see why we're rated so highly</p>
            <button className="btn-accent text-lg px-8 py-4">Get Your Free Quote</button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Reviews;