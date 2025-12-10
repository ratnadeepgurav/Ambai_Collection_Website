import { Link } from 'react-router-dom';
import { CheckCircle, Package, Phone, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { Button } from '@/components/ui/button';

const OrderSuccessPage = () => {
  const orderId = `SS${Date.now().toString().slice(-8)}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background flex items-center justify-center">
        <div className="container-custom py-16">
          <div className="max-w-lg mx-auto text-center">
            {/* Success icon */}
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-success/20 flex items-center justify-center animate-scale-in">
              <CheckCircle className="w-12 h-12 text-success" />
            </div>

            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Order Placed Successfully! 🎉
            </h1>

            <p className="text-muted-foreground mb-6">
              Thank you for your order. We will deliver your beautiful sarees soon!
            </p>

            {/* Order ID */}
            <div className="bg-card rounded-xl p-6 shadow-card mb-6">
              <p className="text-sm text-muted-foreground mb-2">Order ID</p>
              <p className="text-2xl font-bold text-primary">{orderId}</p>
            </div>

            {/* Order status */}
            <div className="bg-muted/50 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center text-primary-foreground">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-xs mt-2">Confirmed</span>
                </div>
                <div className="flex-1 h-1 bg-muted rounded" />
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <Package className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <span className="text-xs mt-2 text-muted-foreground">Packing</span>
                </div>
                <div className="flex-1 h-1 bg-muted rounded" />
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <Package className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <span className="text-xs mt-2 text-muted-foreground">Delivered</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Expected delivery: 1 business days
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="flex-1">
                <Button variant="maroon" size="lg" className="w-full">
                  Continue Shopping
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="tel:+917588245983" className="flex-1">
                <Button variant="outline" size="lg" className="w-full">
                  <Phone className="w-4 h-4" />
                  Call for Updates
                </Button>
              </a>
            </div>

            {/* WhatsApp support */}
            <div className="mt-8 p-4 bg-[#25D366]/10 rounded-xl">
              <p className="text-sm text-foreground">
                📱 Get order updates on WhatsApp! Save our number: <strong>+91 7588245983</strong>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default OrderSuccessPage;
