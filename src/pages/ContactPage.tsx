import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        {/* Hero */}
        <div className="bg-gradient-to-r from-primary/10 via-gold/5 to-primary/10 py-12">
          <div className="container-custom text-center">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg">
              We're here to help! Reach out to us anytime.
            </p>
          </div>
        </div>

        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <a
                  href="tel:+917588245983"
                  className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Call Us</h3>
                    <p className="text-primary text-lg font-medium">+91 7588245983</p>
                    <p className="text-sm text-muted-foreground">Mon - Sun, 9AM - 8PM</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/917588245983"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-[#25D366] text-lg font-medium">Chat with us</p>
                    <p className="text-sm text-muted-foreground">Quick replies, order updates</p>
                  </div>
                </a>

                <a
                  href="mailto:suvarnagurav2329@gmail.com"
                  className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-secondary text-lg font-medium">suvarnagurav2329@gmail.com</p>
                    <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-card">
                  <div className="w-12 h-12 rounded-full bg-maroon-light/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Visit Our Shop</h3>
                    <p className="text-foreground">Main road, Shahuwadi</p>
                    <p className="text-muted-foreground">Kolhaour , Maharashtra - 416215</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-card">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Working Hours</h3>
                    <p className="text-foreground">Monday - Sunday</p>
                    <p className="text-muted-foreground">9:00 AM - 8:00 PM</p>
      
                  </div>
                </div>
              </div>
            </div>

            {/* Map & Quick help */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Quick Help
              </h2>

              <div className="bg-card rounded-xl p-6 shadow-card mb-6">
                <h3 className="font-semibold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div className="border-b border-border pb-4">
                    <h4 className="font-medium text-foreground mb-1">How to track my order?</h4>
                    <p className="text-sm text-muted-foreground">
                      Call us or WhatsApp with your Order ID. We'll update you immediately!
                    </p>
                  </div>
                  <div className="border-b border-border pb-4">
                    <h4 className="font-medium text-foreground mb-1">Is Cash on Delivery available?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes! COD is available for all orders. Pay when you receive your saree.
                    </p>
                  </div>
                  <div className="border-b border-border pb-4">
                    <h4 className="font-medium text-foreground mb-1">Do you deliver to villages?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes! We deliver to most villages in the district. Free delivery on ₹499+
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">How to return a saree?</h4>
                    <p className="text-sm text-muted-foreground">
                      Easy 1 -day returns! Just call us and we'll arrange pickup.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Need Help Choosing?</h3>
                <p className="text-muted-foreground mb-4">
                  Our experts can help you find the perfect saree!
                </p>
                <a href="https://wa.me/917588245983" target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" size="lg">
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
