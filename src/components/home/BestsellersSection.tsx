import { Link } from 'react-router-dom';
import { ArrowRight, Flame } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { Button } from '@/components/ui/button';

const BestsellersSection = () => {
  const bestsellers = products.filter(p => p.isBestseller).slice(0, 4);

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wide">Most Popular</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Bestselling Sarees
            </h2>
          </div>
          <Link to="/products?sort=bestselling">
            <Button variant="outline">
              View All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
