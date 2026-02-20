import { useCart } from '../context/CartContext'

const StarRating = ({ rate }) => {
  const stars = Math.round(rate)
  return (
    <span className="text-yellow-400 text-sm">
      {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
    </span>
  )
}

const ProductCard = ({ product }) => {
  const { cart, addItem } = useCart()
  const inCart = cart.some((item) => item.id === product.id)

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
      <div className="h-52 bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=No+Image' }}
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wide mb-1">
          {product.category}
        </span>
        <h3 className="text-gray-800 font-semibold text-base leading-tight mb-2 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2 flex-1">
          {product.description}
        </p>
        <div className="flex items-center gap-1 mb-3">
          <StarRating rate={product.rating.rate} />
          <span className="text-gray-400 text-xs">({product.rating.count})</span>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-indigo-600 font-bold text-lg">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addItem(product)}
            disabled={inCart}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
              inCart
                ? 'bg-green-100 text-green-700 cursor-default'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            {inCart ? '✓ In Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
