import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Get in touch for your free consultation and quote today
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="card-elegant">
                <h2 className="text-3xl font-bold mb-8">Get Your Free Quote</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone *</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Service Required</label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>Windows</option>
                      <option>Doors</option>
                      <option>Both Windows & Doors</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full btn-hero">
                    Send Message & Get Quote
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="card-elegant">
                  <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <a href="tel:+447435854263" className="text-primary hover:underline">
                          +44 743 585 4263
                        </a>
                        <p className="text-sm text-muted-foreground">Available 7 days a week</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Mail className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <a href="mailto:thewindowdoorguyz@gmail.com" className="text-primary hover:underline">
                          thewindowdoorguyz@gmail.com
                        </a>
                        <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MessageCircle className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1">WhatsApp</h4>
                        <a href="https://wa.me/447435854263" className="text-primary hover:underline">
                          Chat with us instantly
                        </a>
                        <p className="text-sm text-muted-foreground">Quick responses guaranteed</p>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="card-elegant">
                  <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-semibold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-semibold">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold">10:00 AM - 2:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="card-elegant">
                  <h3 className="text-2xl font-bold mb-6">Service Areas</h3>
                  <p className="text-muted-foreground mb-4">
                    We proudly serve customers across the Greater Manchester area and surrounding regions:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>• Manchester</div>
                    <div>• Birmingham</div>
                    <div>• Leeds</div>
                    <div>• Liverpool</div>
                    <div>• Sheffield</div>
                    <div>• Newcastle</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;