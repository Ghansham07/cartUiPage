import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useState } from 'react';

export const ShoppingCart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalItems, getTotalPrice } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setShowCheckout(true);
  };

  const handleConfirmCheckout = () => {
    clearCart();
    setShowCheckout(false);
  };

  if (cart.length === 0) {
    return (
      <div className="sticky top-4">
        <Card className="p-8">
          <div className="text-center space-y-4">
            <ShoppingCartIcon sx={{ fontSize: 64 }} className="text-muted-foreground mx-auto" />
            <h3 className="text-xl font-semibold text-card-foreground">Your cart is empty</h3>
            <p className="text-muted-foreground">Add some products to get started!</p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <>
      <div className="sticky top-4 space-y-4">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-2">
              <ShoppingCartIcon />
              Shopping Cart
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearCart}
              className="text-destructive hover:text-destructive"
            >
              Clear All
            </Button>
          </div>

          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 p-3 rounded-lg bg-secondary/50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-card-foreground">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">${item.price.toFixed(2)} each</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <DeleteIcon sx={{ fontSize: 18 }} />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="h-8 w-8 p-0"
                      >
                        <RemoveIcon sx={{ fontSize: 16 }} />
                      </Button>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                        className="w-16 text-center h-8"
                        min="1"
                        max={item.stock}
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        disabled={item.quantity >= item.stock}
                        className="h-8 w-8 p-0"
                      >
                        <AddIcon sx={{ fontSize: 16 }} />
                      </Button>
                    </div>
                    <span className="font-bold text-primary">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Separator className="my-4" />

          <div className="space-y-2">
            <div className="flex justify-between text-muted-foreground">
              <span>Total Items:</span>
              <span className="font-semibold">{getTotalItems()}</span>
            </div>
            <div className="flex justify-between text-xl font-bold text-card-foreground">
              <span>Total Price:</span>
              <span className="text-primary">${getTotalPrice().toFixed(2)}</span>
            </div>
          </div>

          <Button
            onClick={handleCheckout}
            className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground"
            size="lg"
          >
            Proceed to Checkout
          </Button>
        </Card>
      </div>

      <Dialog open={showCheckout} onOpenChange={setShowCheckout}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Order Confirmed! 🎉</DialogTitle>
            <DialogDescription className="space-y-4 pt-4">
              <p>Thank you for your purchase!</p>
              <div className="bg-secondary p-4 rounded-lg space-y-2">
                <div className="flex justify-between">
                  <span>Total Items:</span>
                  <span className="font-semibold">{getTotalItems()}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-primary">
                  <span>Total Amount:</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                This is a demo checkout. Your order has been processed successfully!
              </p>
            </DialogDescription>
          </DialogHeader>
          <Button onClick={handleConfirmCheckout} className="w-full">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};
