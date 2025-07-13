import Image from 'next/image'
import { FiChevronRight } from 'react-icons/fi'

export default function ProductGrid({ title, products }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">{title}</h2>
        <a href="#" className="text-rose-700 hover:underline flex items-center">
          View All <FiChevronRight className="ml-1" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative overflow-hidden rounded-lg mb-3 h-80">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {product.soldOut && (
                <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 text-xs font-medium">
                  Sold Out
                </div>
              )}
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-rose-700 px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                Quick View
              </button>
            </div>
            <h3 className="font-medium">{product.name}</h3>
            <div className="flex items-center mt-1">
              <span className="text-rose-700 text-sm">{product.discount}</span>
              <span className="ml-2 text-gray-500 text-sm line-through">{product.regularPrice}</span>
            </div>
            <p className="text-gray-900 font-medium">{product.salePrice}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {product.sizes.map((size) => (
                <span key={size} className="text-xs border px-2 py-1">{size}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}