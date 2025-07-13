import Image from 'next/image'
import { FiSearch, FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi'

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/images/logo.png"
            alt="Chikankari Hues"
            width={180}
            height={50}
            className="h-10 w-auto"
          />
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-800 hover:text-rose-700 font-medium">New Arrivals</a>
          <a href="#" className="text-gray-800 hover:text-rose-700 font-medium">Kurtas</a>
          <a href="#" className="text-gray-800 hover:text-rose-700 font-medium">Sarees</a>
          <a href="#" className="text-gray-800 hover:text-rose-700 font-medium">Dupattas</a>
          <a href="#" className="text-gray-800 hover:text-rose-700 font-medium">About Us</a>
        </nav>

        <div className="flex items-center space-x-6">
          <FiSearch className="text-xl cursor-pointer hover:text-rose-700" />
          <FiUser className="text-xl cursor-pointer hover:text-rose-700" />
          <FiHeart className="text-xl cursor-pointer hover:text-rose-700" />
          <div className="relative">
            <FiShoppingBag className="text-xl cursor-pointer hover:text-rose-700" />
            <span className="absolute -top-2 -right-2 bg-rose-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
          </div>
        </div>
      </div>
    </header>
  )
}