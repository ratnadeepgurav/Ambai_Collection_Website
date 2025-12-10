import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Product } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.discount && (
            <Badge variant="discount" className="text-xs font-bold px-2 py-1">
              {product.discount}% OFF
            </Badge>
          )}
          {product.isBestseller && (
            <Badge variant="gold" className="text-xs px-2 py-1">
              ⭐ Bestseller
            </Badge>
          )}
          {product.isNewArrival && (
            <Badge variant="maroon" className="text-xs px-2 py-1">
              🆕 New
            </Badge>
          )}
        </div>

        {/* Quick actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="icon" variant="secondary" className="w-8 h-8 rounded-full">
            <Heart className="w-4 h-4" />
          </Button>
          <Link to={`/product/${product.id}`}>
            <Button size="icon" variant="secondary" className="w-8 h-8 rounded-full">
              <Eye className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* COD badge */}
        <div className="absolute bottom-3 left-3">
          <Badge variant="cod" className="text-[10px] px-2 py-1">
            💵 COD Available
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-foreground line-clamp-2 mb-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
          <span className="text-gold">{'★'.repeat(Math.floor(product.rating))}</span>
          <span>({product.reviewCount})</span>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold text-primary">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
          )}
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
          <span>{product.fabric}</span>
          <span>•</span>
          <span>{product.category}</span>
        </div>

        <Button
          variant="maroon"
          className="w-full"
          size="sm"
          onClick={() => addItem(product)}
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
