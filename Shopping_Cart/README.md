# Shopping Cart

A feature-rich shopping cart application built with React, demonstrating advanced React patterns and concepts.

## Features

- **Browse Products** — 12 products across 4 categories (clothing, electronics, footwear, accessories)
- **Search & Filter** — Real-time search by name/description and filter by category
- **Sort Products** — Sort by default, price (low/high), or rating
- **Shopping Cart** — Add items, adjust quantity, and remove items
- **Order Summary** — Live subtotal, 8% tax, free shipping over $50
- **Persistent Cart** — Cart is saved to `localStorage` and restored on reload
- **Responsive Design** — Works on mobile, tablet, and desktop

## React Concepts Demonstrated

| Concept | Where used |
|---|---|
| `useReducer` | Cart state management (`CartContext.jsx`) |
| `useContext` / `createContext` | Global cart state shared across components |
| `useMemo` | Derived filtered/sorted product list (`ProductsPage.jsx`) |
| `useEffect` | Persist cart to localStorage (`CartContext.jsx`) |
| `useState` | Search, filter, sort UI state (`ProductsPage.jsx`) |
| React Router (`BrowserRouter`, `Routes`, `Route`, `Link`, `useLocation`) | Multi-page navigation |
| Custom hook (`useCart`) | Encapsulate cart context access |
| Component composition | `Navbar`, `ProductCard`, `CartItem`, page components |

## Project Structure

```
Shopping_Cart/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation with cart badge
│   │   ├── ProductCard.jsx  # Product display card
│   │   └── CartItem.jsx     # Individual cart item row
│   ├── context/
│   │   └── CartContext.jsx  # Context API + useReducer for cart state
│   ├── data/
│   │   └── products.js      # Static product catalogue
│   ├── pages/
│   │   ├── ProductsPage.jsx # Browse / search / filter products
│   │   └── CartPage.jsx     # Cart view with order summary
│   ├── App.jsx              # Router setup
│   ├── App.css
│   ├── index.css            # Tailwind directives
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Getting Started

```bash
cd Shopping_Cart
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

## Technologies Used

- **React 19** — UI library
- **React Router v7** — Client-side routing
- **Vite** — Build tool
- **Tailwind CSS 3** — Utility-first CSS framework

