import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-saree.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful traditional saree"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-12">
        <div className="max-w-xl">
          {/* Announcement badge */}
          <Badge variant="festival" className="mb-6 py-2 px-4 text-sm animate-bounce-subtle">
            <Sparkles className="w-4 h-4 mr-1" />
            Diwali Special Offers Live!
          </Badge>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Affordable & Quality
            <span className="block text-gradient-gold">साड़ियाँ</span>
          </h1>

          <p className="text-lg text-primary-foreground/90 mb-6 leading-relaxed">
            Direct from weaver to your home. Best quality sarees at village-friendly prices. 
            <span className="font-semibold text-secondary"> Free gifts on festival orders!</span>
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Badge variant="cod" className="py-2 px-3 text-sm">
              💵 Cash on Delivery
            </Badge>
            <Badge variant="success" className="py-2 px-3 text-sm">
              🚚 Free Delivery 499+
            </Badge>
            <Badge variant="gold" className="py-2 px-3 text-sm">
              ⭐ 4.8 Rating
            </Badge>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <Link to="/products">
              <Button variant="gold" size="xl">
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/products?maxPrice=500">
              <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                Under ₹500
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 flex gap-8 text-primary-foreground">
            <div>
              <div className="text-3xl font-bold text-secondary">5000+</div>
              <div className="text-sm opacity-80">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">200+</div>
              <div className="text-sm opacity-80">Saree Designs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">₹299</div>
              <div className="text-sm opacity-80">Starting Price</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
