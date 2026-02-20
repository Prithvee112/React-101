import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const { totalItems } = useCart()
  const location = useLocation()

  const linkClass = (path) =>
    `px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
      location.pathname === path
        ? 'bg-white text-indigo-600'
        : 'text-white hover:bg-indigo-500'
    }`

  return (
    <nav className="bg-indigo-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold tracking-tight">
          🛍️ ShopReact
        </Link>
        <div className="flex items-center gap-2">
          <Link to="/" className={linkClass('/')}>
            Products
          </Link>
          <Link to="/cart" className={`${linkClass('/cart')} relative`}>
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {totalItems > 99 ? '99+' : totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
