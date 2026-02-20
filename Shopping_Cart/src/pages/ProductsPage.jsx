import { useState, useMemo } from 'react'
import ProductCard from '../components/ProductCard'
import products from '../data/products'

const CATEGORIES = ['all', ...new Set(products.map((p) => p.category))]

const ProductsPage = () => {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('default')

  const filtered = useMemo(() => {
    let result = products

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      )
    }

    if (sortBy === 'price-asc') result = [...result].sort((a, b) => a.price - b.price)
    else if (sortBy === 'price-desc') result = [...result].sort((a, b) => b.price - a.price)
    else if (sortBy === 'rating') result = [...result].sort((a, b) => b.rating.rate - a.rating.rate)

    return result
  }, [search, selectedCategory, sortBy])

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Our Products</h1>
        <p className="text-gray-500 mb-6">{filtered.length} product{filtered.length !== 1 ? 's' : ''} found</p>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="flex-1 min-w-48 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 bg-white"
          />

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium capitalize transition-colors duration-200 ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-indigo-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 bg-white text-gray-700"
          >
            <option value="default">Sort: Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <p className="text-6xl mb-4">🔍</p>
            <p className="text-xl font-semibold">No products found</p>
            <p className="text-sm mt-2">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductsPage
