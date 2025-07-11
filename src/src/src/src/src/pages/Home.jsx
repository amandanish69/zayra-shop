import React from 'react'

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Zayra 🛍️</h1>
      <p className="text-lg text-gray-700">Explore the best products in Clothing, Electronics, Accessories, and Home Decor.</p>
    </div>
  )
}

export default Home
import React from 'react'
import CategoryList from '../components/CategoryList'
import ProductCard from '../components/ProductCard'
import products from '../data/products'

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Zayra 🛍️</h1>
      <p className="text-lg text-gray-700 mb-6">
        Explore the best products in Clothing, Electronics, Accessories, and Home Decor.
      </p>

      <CategoryList />

      <h2 className="text-2xl font-semibold mt-10 mb-4">All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home
