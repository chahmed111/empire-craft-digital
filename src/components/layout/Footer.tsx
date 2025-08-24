import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/23cec4bc-fca0-417f-890d-72c0fa65e962.png" 
                alt="The Window & Door Guyz Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Elevating your living experience with premium quality doors and windows. 
              Professional installation and exceptional service since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="/windows" className="text-gray-300 hover:text-accent transition-colors">Windows</a></li>
              <li><a href="/doors" className="text-gray-300 hover:text-accent transition-colors">Doors</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-accent transition-colors">Gallery</a></li>
              <li><a href="/offers" className="text-gray-300 hover:text-accent transition-colors">Current Offers</a></li>
              <li><a href="/reviews" className="text-gray-300 hover:text-accent transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">uPVC Windows</span></li>
              <li><span className="text-gray-300">Composite Doors</span></li>
              <li><span className="text-gray-300">Double Glazing</span></li>
              <li><span className="text-gray-300">French Doors</span></li>
              <li><span className="text-gray-300">Bi-Fold Doors</span></li>
              <li><span className="text-gray-300">Free Consultations</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-accent" />
                <a href="tel:+44123456789" className="text-gray-300 hover:text-accent transition-colors">
                  +44 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-accent" />
                <a href="mailto:info@thewindowdoorguyz.co.uk" className="text-gray-300 hover:text-accent transition-colors">
                  info@thewindowdoorguyz.co.uk
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-1" />
                <span className="text-gray-300">
                  123 High Street<br />
                  Manchester, M1 1AA<br />
                  United Kingdom
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 The Window & Door Guyz. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/legal/privacy" className="text-gray-300 hover:text-accent transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="/legal/terms" className="text-gray-300 hover:text-accent transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;