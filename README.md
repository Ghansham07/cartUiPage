# ShopEase - Modern Shopping Cart Application

A fully functional ReactJS-based shopping cart application with real-time cart updates, product filtering, and persistent storage.

## Demo
link: https://cart-ui-page.vercel.app/

## Features

### Core Functionality
- **Product Catalog**: Browse through a curated collection of products with images, prices, and stock information
- **Shopping Cart Management**: 
  - Add products to cart with real-time updates
  - Remove items from cart
  - Update quantities with stock validation
  - Automatic price calculations
- **Product Filtering**: Filter by category and price range
- **Local Storage Persistence**: Cart data persists across browser sessions
- **Checkout Flow**: Mock checkout with order confirmation

### User Experience
- Responsive design that works on all devices
- Smooth animations and transitions
- Toast notifications for user actions
- Stock validation to prevent over-ordering
- Clean, modern UI with Material-UI icons

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Context API** - State management
- **Tailwind CSS** - Styling framework
- **Material-UI Icons** - Icon library
- **Vite** - Build tool
- **shadcn/ui** - UI components

## Project Structure

```
src/
├── components/
│   ├── ProductCard.tsx       # Individual product display
│   ├── ShoppingCart.tsx      # Cart sidebar with items
│   └── ProductFilters.tsx    # Category and price filters
├── contexts/
│   └── CartContext.tsx       # Cart state management
├── data/
│   └── products.ts           # Sample product data
├── pages/
│   └── Index.tsx             # Main shopping page
└── index.css                 # Design system tokens
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ghansham07/cartUiPage.git
cd  cart-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:8080
```

## Usage Guide

### Adding Products to Cart
1. Browse the product catalog
2. Click "Add to Cart" on any product
3. Cart updates automatically with item count and total price

### Managing Cart Items
- **Increase/Decrease Quantity**: Use the +/- buttons in the cart
- **Manual Quantity Entry**: Type directly into the quantity field
- **Remove Item**: Click the delete icon
- **Clear Cart**: Use "Clear All" button

### Filtering Products
1. Select a category from the dropdown
2. Adjust price range using the sliders
3. Click "Apply" to filter products
4. Use "Reset" to clear all filters

### Checkout
1. Add items to your cart
2. Click "Proceed to Checkout"
3. Review your order in the confirmation dialog
4. Confirm to complete the purchase (mock)

## Features Implemented

✅ Product list with images, prices, and stock
✅ Add to cart functionality
✅ Remove from cart
✅ Update quantities with validation
✅ Real-time total calculation
✅ Context API state management
✅ Local storage persistence
✅ Category and price filters
✅ Checkout flow with confirmation
✅ Responsive design
✅ Toast notifications
✅ Stock validation

## Design System

The application uses a custom design system with:
- **Primary Color**: Teal (#0ba9b5) - Professional and trustworthy
- **Accent Color**: Coral (#f26543) - Energetic CTAs
- **Typography**: System fonts for optimal performance
- **Spacing**: Consistent 8px grid system
- **Animations**: Smooth transitions (0.3s cubic-bezier)

## Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory, ready for deployment.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this project for learning or commercial purposes.

---

**Built with ❤️ using React and modern web technologies**
