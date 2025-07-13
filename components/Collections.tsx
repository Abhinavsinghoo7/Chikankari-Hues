import Image from 'next/image'

export default function Collections() {
  const collections = [
    { name: "Young", image: "/images/collections/young.jpg" },
    { name: "Co-ords Sets", image: "/images/collections/coords.jpg" },
    { name: "Sarees", image: "/images/collections/sarees.jpg" },
    { name: "Kurtas", image: "/images/collections/kurtas.jpg" },
    { name: "Dresses", image: "/images/collections/dresses.jpg" },
    { name: "Shirts", image: "/images/collections/shirts.jpg" }
  ]

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Shop by Collections</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {collections.map((collection, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg h-64">
            <Image
              src={collection.image}
              alt={collection.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <h3 className="text-white text-xl font-medium">{collection.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}