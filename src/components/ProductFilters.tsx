import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import FilterListIcon from '@mui/icons-material/FilterList';

interface ProductFiltersProps {
  categories: string[];
  onFilterChange: (filters: { category: string; minPrice: number; maxPrice: number }) => void;
}

export const ProductFilters = ({ categories, onFilterChange }: ProductFiltersProps) => {
  const [category, setCategory] = useState('all');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(300);

  const handleApplyFilters = () => {
    onFilterChange({ category, minPrice, maxPrice });
  };

  const handleReset = () => {
    setCategory('all');
    setMinPrice(0);
    setMaxPrice(300);
    onFilterChange({ category: 'all', minPrice: 0, maxPrice: 300 });
  };

  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <FilterListIcon />
        <h3>Filters</h3>
      </div>

      <div className="space-y-3">
        <div>
          <Label htmlFor="category">Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="minPrice">Min Price: ${minPrice}</Label>
          <Input
            id="minPrice"
            type="range"
            min="0"
            max="300"
            step="10"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="maxPrice">Max Price: ${maxPrice}</Label>
          <Input
            id="maxPrice"
            type="range"
            min="0"
            max="300"
            step="10"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="mt-2"
          />
        </div>

        <div className="flex gap-2 pt-2">
          <Button onClick={handleApplyFilters} className="flex-1">
            Apply
          </Button>
          <Button onClick={handleReset} variant="outline" className="flex-1">
            Reset
          </Button>
        </div>
      </div>
    </Card>
  );
};
