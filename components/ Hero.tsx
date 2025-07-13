import Image from 'next/image'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    "/images/hero/slide1.jpg",
    "/images/hero/slide2.jpg",
    "/images/hero/slide3.jpg"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={slide}
            alt={`Chikankari Collection ${index + 1}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      ))}
      
      <div className="absolute inset-0 bg-black/30 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold mb-6">Summer Chikankari Collection 2024</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Handcrafted with traditional techniques for contemporary elegance
          </p>
          <div className="flex space-x-4">
            <button className="bg-rose-700 hover:bg-rose-800 text-white px-8 py-3 rounded-md font-medium">
              Shop Women's Collection
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-md font-medium border border-white">
              Explore Craftsmanship
            </button>
          </div>
        </div>
      </div>

      <button 
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
      >
        <FiChevronLeft className="text-2xl" />
      </button>
      <button 
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
      >
        <FiChevronRight className="text-2xl" />
      </button>
    </div>
  )
}