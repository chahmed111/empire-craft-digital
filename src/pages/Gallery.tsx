import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import gallery images
import windows1 from '@/assets/gallery/windows-1.jpg';
import door1 from '@/assets/gallery/door-1.jpg';
import windows2 from '@/assets/gallery/windows-2.jpg';
import door2 from '@/assets/gallery/door-2.jpg';
import door3 from '@/assets/gallery/door-3.jpg';
import windows3 from '@/assets/gallery/windows-3.jpg';

const galleryItems = [
  {
    id: 1,
    image: windows1,
    title: "Modern uPVC Windows",
    description: "Energy-efficient double glazed windows installation in Manchester residential property"
  },
  {
    id: 2,
    image: door1,
    title: "Composite Front Door",
    description: "Secure and stylish composite door with decorative glass panels"
  },
  {
    id: 3,
    image: windows2,
    title: "Victorian Bay Windows",
    description: "Period property bay window restoration with modern double glazing"
  },
  {
    id: 4,
    image: door2,
    title: "French Doors",
    description: "Elegant French doors connecting indoor and outdoor living spaces"
  },
  {
    id: 5,
    image: door3,
    title: "Bifold Doors",
    description: "Modern bifold doors creating seamless indoor-outdoor living"
  },
  {
    id: 6,
    image: windows3,
    title: "Traditional Sash Windows",
    description: "Heritage sash windows with contemporary energy efficiency"
  }
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };
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
              {galleryItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="card-elegant hover:shadow-medium transition-all duration-300 cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-[90vh] w-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
              >
                <X size={32} />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-10"
              >
                <ChevronLeft size={32} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-10"
              >
                <ChevronRight size={32} />
              </button>

              <div className="bg-white rounded-lg overflow-hidden">
                <img 
                  src={galleryItems[currentImageIndex].image} 
                  alt={galleryItems[currentImageIndex].title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{galleryItems[currentImageIndex].title}</h3>
                  <p className="text-muted-foreground">{galleryItems[currentImageIndex].description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;