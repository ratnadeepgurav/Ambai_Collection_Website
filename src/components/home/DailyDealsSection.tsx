import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Zap } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';

const DailyDealsSection = () => {
  const deals = products.filter(p => p.discount && p.discount >= 35).slice(0, 3);
  
  // Flash sale timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 23,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 via-gold/5 to-primary/5">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-6 h-6 text-secondary" />
              <span className="text-sm font-medium text-secondary uppercase tracking-wide">Limited Time</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Daily Deals & Flash Sale
            </h2>
          </div>

          {/* Timer */}
          <div className="flex items-center gap-3 bg-foreground text-primary-foreground px-6 py-3 rounded-xl">
            <Clock className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium">Ends in:</span>
            <div className="flex items-center gap-1 font-mono font-bold text-lg">
              <span className="bg-primary px-2 py-1 rounded">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span>:</span>
              <span className="bg-primary px-2 py-1 rounded">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span>:</span>
              <span className="bg-primary px-2 py-1 rounded">{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        {/* Price filter chips */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Link to="/products?maxPrice=500">
            <Badge variant="gold" className="py-2 px-4 text-sm cursor-pointer hover:scale-105 transition-transform">
              🔥 Under ₹500
            </Badge>
          </Link>
          <Link to="/products?maxPrice=800">
            <Badge variant="maroon" className="py-2 px-4 text-sm cursor-pointer hover:scale-105 transition-transform">
              💰 Under ₹800
            </Badge>
          </Link>
          <Link to="/products?combo=true">
            <Badge variant="festival" className="py-2 px-4 text-sm cursor-pointer hover:scale-105 transition-transform">
              🎁 Value Combo: Buy 2 Get 1
            </Badge>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/offers">
            <Button variant="festive" size="lg">
              See All Offers
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DailyDealsSection;
