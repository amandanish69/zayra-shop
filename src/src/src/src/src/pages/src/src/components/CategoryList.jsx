import React from 'react'

const categories = ['Clothes', 'Electronics', 'Accessories', 'Home Decor']

const CategoryList = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {categories.map((category, index) => (
        <div key={index} className="p-4 bg-blue-100 rounded-xl text-center text-lg font-semibold">
          {category}
        </div>
      ))}
    </div>
  )
}

export default CategoryList
