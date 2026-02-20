import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { useCart } from '../context/CartContext'

const CartPage = () => {
  const { cart, clearCart, totalItems, totalPrice } = useCart()

  const TAX_RATE = 0.08
  const SHIPPING_THRESHOLD = 50
  const tax = totalPrice * TAX_RATE
  const shipping = totalPrice >= SHIPPING_THRESHOLD ? 0 : 5.99
  const grandTotal = totalPrice + tax + shipping

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
        <p className="text-8xl mb-6">🛒</p>
        <h2 className="text-3xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Add some products to get started!</p>
        <Link
          to="/"
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
        >
          Browse Products
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-gray-800">
            Your Cart <span className="text-indigo-600">({totalItems})</span>
          </h1>
          <button
            onClick={clearCart}
            className="text-red-500 hover:text-red-700 font-medium text-sm transition-colors duration-200"
          >
            Clear All
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart items */}
          <div className="flex-1 space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Order summary */}
          <div className="lg:w-80">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? 'text-green-600 font-medium' : ''}>
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-indigo-500">
                    Add ${(SHIPPING_THRESHOLD - totalPrice).toFixed(2)} more for free shipping!
                  </p>
                )}
                <hr className="border-gray-200" />
                <div className="flex justify-between text-gray-800 font-bold text-base">
                  <span>Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200">
                Proceed to Checkout
              </button>

              <Link
                to="/"
                className="block text-center text-indigo-500 hover:text-indigo-700 text-sm mt-4 transition-colors duration-200"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
