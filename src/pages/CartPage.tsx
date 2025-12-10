import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, Tag, ArrowRight, Truck } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';

const CartPage = () => {
  const {
    items,
    updateQuantity,
    removeItem,
    applyCoupon,
    removeCoupon,
    appliedCoupon,
    subtotal,
    discount,
    shipping,
    total,
  } = useCart();

  const [couponCode, setCouponCode] = useState('');

  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      applyCoupon(couponCode.trim());
      setCouponCode('');
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center bg-background">
          <div className="text-center py-16">
            <ShoppingBag className="w-20 h-20 text-muted-foreground mx-auto mb-6" />
            <h1 className="font-display text-2xl font-bold text-foreground mb-2">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground mb-6">
              Add some beautiful sarees to your cart!
            </p>
            <Link to="/products">
              <Button variant="maroon" size="lg">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container-custom py-8">
          <h1 className="font-display text-3xl font-bold text-foreground mb-8">
            Shopping Cart ({items.length} items)
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-card rounded-xl p-4 shadow-card flex gap-4"
                >
                  {/* Product image */}
                  <Link to={`/product/${item.product.id}`} className="flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-24 h-32 sm:w-32 sm:h-40 object-cover rounded-lg"
                    />
                  </Link>

                  {/* Product details */}
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.product.id}`}>
                      <h3 className="font-medium text-foreground hover:text-primary transition-colors line-clamp-2">
                        {item.product.name}
                      </h3>
                    </Link>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <span>{item.product.fabric}</span>
                      <span>•</span>
                      <span>{item.product.color}</span>
                    </div>

                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-lg font-bold text-primary">₹{item.product.price}</span>
                      {item.product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{item.product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-border rounded-lg">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-10 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.product.id)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Coupon section */}
              <div className="bg-card rounded-xl p-4 shadow-card">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Tag className="w-4 h-4 text-primary" />
                  Apply Coupon Code
                </h3>
                
                {appliedCoupon ? (
                  <div className="flex items-center justify-between bg-success/10 text-success rounded-lg p-3">
                    <div>
                      <span className="font-semibold">{appliedCoupon.code}</span>
                      <span className="text-sm ml-2">- {appliedCoupon.description}</span>
                    </div>
                    <Button variant="ghost" size="sm" onClick={removeCoupon}>
                      Remove
                    </Button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                      className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground uppercase"
                    />
                    <Button variant="outline" onClick={handleApplyCoupon}>
                      Apply
                    </Button>
                  </div>
                )}

                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge variant="gold" className="cursor-pointer" onClick={() => setCouponCode('VILLAGE10')}>
                    VILLAGE10: 10% OFF
                  </Badge>
                  <Badge variant="maroon" className="cursor-pointer" onClick={() => setCouponCode('FIRSTBUY30')}>
                    FIRSTBUY30: ₹30 OFF
                  </Badge>
                </div>
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl p-6 shadow-card sticky top-24">
                <h2 className="font-semibold text-lg mb-4">Order Summary</h2>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">₹{subtotal}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-success">
                      <span>Discount</span>
                      <span>-₹{discount.toFixed(0)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? (
                        <span className="text-success">FREE</span>
                      ) : (
                        `₹${shipping}`
                      )}
                    </span>
                  </div>

                  {subtotal < 499 && (
                    <div className="bg-gold/10 text-gold-dark text-xs p-2 rounded-lg">
                      Add ₹{499 - subtotal} more for FREE delivery!
                    </div>
                  )}

                  <div className="border-t border-border pt-3 mt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">₹{total.toFixed(0)}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      (Inclusive of all taxes)
                    </p>
                  </div>
                </div>

                <Link to="/checkout" className="block mt-6">
                  <Button variant="maroon" size="lg" className="w-full">
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                <Link to="/products" className="block mt-3">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>

                {/* Trust badges */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Truck className="w-4 h-4 text-success" />
                    <span>Free delivery on ₹499+</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Badge variant="cod" className="text-xs">💵 COD Available</Badge>
                  </div>
                </div>
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

export default CartPage;
