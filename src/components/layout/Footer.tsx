import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground mt-16">
      {/* Trust badges section */}
      <div className="bg-primary/10 py-6 border-b border-primary/20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <span className="text-sm font-medium text-primary-foreground">Quality Checked</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-2xl">↩</span>
              </div>
              <span className="text-sm font-medium text-primary-foreground">Easy Returns</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-2xl">₹</span>
              </div>
              <span className="text-sm font-medium text-primary-foreground">Low Price Guarantee</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                <span className="text-2xl">💵</span>
              </div>
              <span className="text-sm font-medium text-primary-foreground">COD Available</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-maroon-light to-gold flex items-center justify-center">
                <span className="font-display font-bold text-lg">स</span>
              </div>
              <span className="font-display font-bold text-xl">साड़ी संसार</span>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Bringing quality sarees to village homes at affordable prices. Your trusted saree shop since 2020.
            </p>
            <p className="text-sm text-success font-medium">
              🚚 Local Village Delivery Available
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/products" className="hover:text-secondary transition-colors">All Sarees</Link></li>
              <li><Link to="/offers" className="hover:text-secondary transition-colors">Today's Offers</Link></li>
              <li><Link to="/collections" className="hover:text-secondary transition-colors">Collections</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Categories</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/products?category=cotton" className="hover:text-secondary transition-colors">Cotton Sarees</Link></li>
              <li><Link to="/products?category=silk" className="hover:text-secondary transition-colors">Silk Sarees</Link></li>
              <li><Link to="/products?category=banarasi" className="hover:text-secondary transition-colors">Banarasi Sarees</Link></li>
              <li><Link to="/products?category=wedding" className="hover:text-secondary transition-colors">Wedding Sarees</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                <a href="tel:+919876543210" className="hover:text-secondary">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary" />
                <a href="mailto:info@sareesansar.com" className="hover:text-secondary">info@sareesansar.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary mt-0.5" />
                <span>Main Market, Rampur Village, District XYZ, State - 123456</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary" />
                <span>Mon - Sat: 9AM - 8PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>© 2024 साड़ी संसार (Saree Sansar). All rights reserved.</p>
          <p className="mt-2">Made with ❤️ for village customers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
