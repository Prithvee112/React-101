import { useCart } from '../context/CartContext'

const CartItem = ({ item }) => {
  const { removeItem, increment, decrement } = useCart()

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <img
        src={item.image}
        alt={item.title}
        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
        onError={(e) => { e.target.src = 'https://via.placeholder.com/80x80?text=No+Image' }}
      />
      <div className="flex-1 min-w-0">
        <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wide">
          {item.category}
        </span>
        <h4 className="text-gray-800 font-semibold text-sm leading-tight truncate">
          {item.title}
        </h4>
        <p className="text-indigo-600 font-bold mt-1">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          onClick={() => decrement(item.id)}
          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold flex items-center justify-center transition-colors duration-200"
        >
          −
        </button>
        <span className="w-8 text-center font-semibold text-gray-800">{item.quantity}</span>
        <button
          onClick={() => increment(item.id)}
          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold flex items-center justify-center transition-colors duration-200"
        >
          +
        </button>
      </div>
      <div className="text-right flex-shrink-0">
        <p className="text-gray-800 font-bold">${(item.price * item.quantity).toFixed(2)}</p>
        <button
          onClick={() => removeItem(item.id)}
          className="text-red-400 hover:text-red-600 text-xs mt-1 transition-colors duration-200"
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem
