import Head from 'next/head'
import Image from 'next/image'
import { FiShoppingBag, FiHeart, FiChevronRight } from 'react-icons/fi'

export default function Home() {
  // Product data
  const featuredProducts = [
    {
      id: 1,
      name: "Lavender Blossom Dress",
      salePrice: "Rs. 1,950.00",
      regularPrice: "Rs. 3,000.00",
      discount: "-35%",
      image: "/images/products/lavender-dress.jpg",
      sizes: ["XS", "S", "M", "L", "XL"],
      soldOut: false
    },
    // Add all 30+ products from your screenshot
  ];

  const collections = [
    { name: "Young", image: "/images/collections/young.jpg" },
    { name: "Co-ords Sets", image: "/images/collections/coords.jpg" },
    // Add all collections
  ];

  const fabrics = [
    { name: "Muslin", image: "/images/fabrics/muslin.jpg" },
    { name: "Crepe", image: "/images/fabrics/crepe.jpg" },
    // Add all fabrics
  ];

  return (
    <div className="font-sans">
      <Head>
        <title>Chikankari Hues | Premium Handcrafted Fashion</title>
        <meta name="description" content="Authentic Chikankari clothing" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Image 
            src="/images/logo.png" 
            alt="Chikankari Hues" 
            width={180} 
            height={50}
          />
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-rose-700">Shop</a>
            <a href="#" className="hover:text-rose-700">Collections</a>
            <a href="#" className="hover:text-rose-700">About</a>
            <a href="#" className="hover:text-rose-700">Blog</a>
          </nav>
          <div className="flex items-center space-x-6">
            <FiShoppingBag className="text-xl" />
            <FiHeart className="text-xl" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <Image
          src="/images/hero.jpg"
          alt="Chikankari Collection"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-5xl font-bold mb-6">CHIKANKARI HUES</h1>
            <p className="text-xl mb-8">Premium handcrafted Chikankari collections</p>
            <button className="bg-rose-700 hover:bg-rose-800 text-white px-8 py-3 rounded-md">
              Shop Collection
            </button>
          </div>
        </div>
      </section>

      {/* Shop by Collections */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Collections</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {collections.map((collection, index) => (
            <div key={index} className="text-center">
              <div className="relative h-40 mb-4">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="font-medium">{collection.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Upgrade Your Wardrobe With "Young"</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.slice(0, 8).map((product) => (
            <div key={product.id} className="border rounded-lg overflow-hidden">
              {product.soldOut && (
                <div className="absolute bg-black text-white px-2 py-1 text-sm">
                  Sold Out
                </div>
              )}
              <div className="relative h-80">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">{product.name}</h3>
                <div className="flex items-center mt-2">
                  <span className="text-rose-700">{product.discount}</span>
                  <span className="ml-2 text-gray-500 line-through">{product.regularPrice}</span>
                </div>
                <p className="font-bold">{product.salePrice}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {product.sizes.map((size) => (
                    <span key={size} className="border px-2 py-1 text-sm">{size}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Fabrics */}
      <section className="py-16 px-6 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Fabrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {fabrics.map((fabric, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-4 rounded-full w-24 h-24 mx-auto mb-2 flex items-center justify-center">
                  <Image
                    src={fabric.image}
                    alt={fabric.name}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-sm">{fabric.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">From Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((post) => (
            <div key={post} className="border rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={`/images/blog/post-${post}.jpg`}
                  alt={`Blog post ${post}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Blog Post Title</h3>
                <p className="text-gray-600 mb-4">July 14, 2024</p>
                <a href="#" className="text-rose-700 hover:underline flex items-center">
                  Read more <FiChevronRight className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image 
              src="/images/logo-white.png"
              alt="Chikankari Hues"
              width={180}
              height={50}
              className="mb-4"
            />
            <p className="text-gray-400">Handcrafted in Bharat, Made with Love!</p>
          </div>
          {/* Add other footer sections */}
        </div>
      </footer>
    </div>
  )
}