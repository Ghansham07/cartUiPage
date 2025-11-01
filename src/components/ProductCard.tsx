import { Product } from '@/contexts/CartContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-hover group">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
          {product.category}
        </Badge>
      </div>
      
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg text-card-foreground mb-1 line-clamp-1">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <InventoryIcon sx={{ fontSize: 16 }} />
            <span>{product.stock} in stock</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          <Button
            onClick={() => addToCart(product)}
            disabled={product.stock === 0}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <AddShoppingCartIcon sx={{ fontSize: 18, marginRight: 1 }} />
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};
