import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown, Grid, List } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import ProductCard from '@/components/product/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products, priceFilters, fabricFilters, colorFilters, categories } from '@/data/products';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('price-low');

  // Get filter values from URL
  const categoryFilter = searchParams.get('category');
  const maxPriceFilter = searchParams.get('maxPrice');

  // Filter states
  const [selectedPriceRange, setSelectedPriceRange] = useState<{ min: number; max: number } | null>(
    maxPriceFilter ? { min: 0, max: parseInt(maxPriceFilter) } : null
  );
  const [selectedFabrics, setSelectedFabrics] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryFilter);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory) {
      result = result.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    // Price filter
    if (selectedPriceRange) {
      result = result.filter(p => p.price >= selectedPriceRange.min && p.price <= selectedPriceRange.max);
    }

    // Fabric filter
    if (selectedFabrics.length > 0) {
      result = result.filter(p => selectedFabrics.includes(p.fabric));
    }

    // Color filter
    if (selectedColors.length > 0) {
      result = result.filter(p => selectedColors.includes(p.color));
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'bestselling':
        result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
        break;
      case 'new':
        result.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    return result;
  }, [selectedCategory, selectedPriceRange, selectedFabrics, selectedColors, sortBy]);

  const clearFilters = () => {
    setSelectedPriceRange(null);
    setSelectedFabrics([]);
    setSelectedColors([]);
    setSelectedCategory(null);
    setSearchParams({});
  };

  const toggleFabric = (fabric: string) => {
    setSelectedFabrics(prev =>
      prev.includes(fabric) ? prev.filter(f => f !== fabric) : [...prev, fabric]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const hasActiveFilters = selectedPriceRange || selectedFabrics.length > 0 || selectedColors.length > 0 || selectedCategory;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        {/* Page header */}
        <div className="bg-gradient-to-r from-primary/10 via-gold/5 to-primary/10 py-8">
          <div className="container-custom">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
              {selectedCategory ? `${selectedCategory} Sarees` : 'All Sarees'}
            </h1>
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} sarees | Free delivery on ₹499+
            </p>
          </div>
        </div>

        <div className="container-custom py-8">
          {/* Mobile filter button */}
          <div className="lg:hidden flex items-center justify-between mb-6">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <Badge variant="maroon" className="ml-1">Active</Badge>
              )}
            </Button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border border-border bg-background text-foreground"
            >
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="bestselling">Best Selling</option>
              <option value="new">New Arrivals</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          <div className="flex gap-8">
            {/* Sidebar filters - Desktop */}
            <aside className={`${showFilters ? 'fixed inset-0 z-50 bg-background p-6 overflow-y-auto' : 'hidden'} lg:block lg:static lg:w-64 lg:flex-shrink-0`}>
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h2 className="font-semibold text-lg">Filters</h2>
                <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="mb-6 text-destructive"
                >
                  <X className="w-4 h-4 mr-1" />
                  Clear All Filters
                </Button>
              )}

              {/* Price filters */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  💰 Price Range
                </h3>
                <div className="space-y-2">
                  {priceFilters.map((range) => (
                    <button
                      key={range.label}
                    onClick={() => setSelectedPriceRange(
                      selectedPriceRange?.max === range.max && selectedPriceRange?.min === range.min ? null : range
                    )}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedPriceRange?.max === range.max
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category filters */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  📁 Category
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(
                        selectedCategory === cat.id ? null : cat.id
                      )}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === cat.id
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      }`}
                    >
                      {cat.name} ({cat.productCount})
                    </button>
                  ))}
                </div>
              </div>

              {/* Fabric filters */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  🧵 Fabric
                </h3>
                <div className="flex flex-wrap gap-2">
                  {fabricFilters.map((fabric) => (
                    <button
                      key={fabric}
                      onClick={() => toggleFabric(fabric)}
                      className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                        selectedFabrics.includes(fabric)
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                    >
                      {fabric}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color filters */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  🎨 Color
                </h3>
                <div className="flex flex-wrap gap-2">
                  {colorFilters.map((color) => (
                    <button
                      key={color}
                      onClick={() => toggleColor(color)}
                      className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                        selectedColors.includes(color)
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile apply button */}
              <div className="lg:hidden mt-8">
                <Button
                  variant="maroon"
                  className="w-full"
                  onClick={() => setShowFilters(false)}
                >
                  Apply Filters ({filteredProducts.length} results)
                </Button>
              </div>
            </aside>

            {/* Products grid */}
            <div className="flex-1">
              {/* Desktop sort */}
              <div className="hidden lg:flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  {filteredProducts.length} sarees found
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-border bg-background text-foreground"
                  >
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="bestselling">Best Selling</option>
                    <option value="new">New Arrivals</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>
              </div>

              {/* Active filters display */}
              {hasActiveFilters && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedPriceRange && (
                    <Badge variant="maroon" className="gap-1">
                      {selectedPriceRange.max === 500 ? 'Under ₹500' : selectedPriceRange.max === 800 ? 'Under ₹800' : `₹${selectedPriceRange.min}-${selectedPriceRange.max}`}
                      <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedPriceRange(null)} />
                    </Badge>
                  )}
                  {selectedCategory && (
                    <Badge variant="maroon" className="gap-1">
                      {selectedCategory}
                      <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCategory(null)} />
                    </Badge>
                  )}
                  {selectedFabrics.map(f => (
                    <Badge key={f} variant="gold" className="gap-1">
                      {f}
                      <X className="w-3 h-3 cursor-pointer" onClick={() => toggleFabric(f)} />
                    </Badge>
                  ))}
                  {selectedColors.map(c => (
                    <Badge key={c} variant="gold" className="gap-1">
                      {c}
                      <X className="w-3 h-3 cursor-pointer" onClick={() => toggleColor(c)} />
                    </Badge>
                  ))}
                </div>
              )}

              {/* Products grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-2xl mb-4">😔</p>
                  <h3 className="font-semibold text-lg mb-2">No sarees found</h3>
                  <p className="text-muted-foreground mb-4">Try adjusting your filters</p>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductsPage;
