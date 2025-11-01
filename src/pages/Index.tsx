import { useState, useMemo } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { ShoppingCart } from '@/components/ShoppingCart';
import { ProductFilters } from '@/components/ProductFilters';
import { products } from '@/data/products';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Index = () => {
  const { getTotalItems } = useCart();
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
    maxPrice: 300,
  });

  const categories = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.category)));
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = filters.category === 'all' || product.category === filters.category;
      const matchesPrice = product.price >= filters.minPrice && product.price <= filters.maxPrice;
      return matchesCategory && matchesPrice;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm sticky top-0 z-10 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBagIcon sx={{ fontSize: 32 }} className="text-primary" />
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">ShopEase</h1>
            </div>
            <Badge className="text-base px-4 py-2 bg-primary text-primary-foreground">
              {getTotalItems()} Items
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-3">
            <ProductFilters categories={categories} onFilterChange={setFilters} />
          </aside>

          {/* Products Grid */}
          <section className="lg:col-span-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-foreground">
                {filteredProducts.length} Products Available
              </h2>
              <p className="text-muted-foreground">Find the perfect items for you</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  No products found matching your filters.
                </p>
              </div>
            )}
          </section>

          {/* Shopping Cart */}
          <aside className="lg:col-span-3">
            <ShoppingCart />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Index;
