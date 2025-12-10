import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Shop by Collection
          </h2>
          <p className="text-muted-foreground">Find your perfect saree from our curated collections</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <h3 className="font-semibold text-primary-foreground text-lg">{category.name}</h3>
                <p className="text-primary-foreground/80 text-sm">{category.productCount} Sarees</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
