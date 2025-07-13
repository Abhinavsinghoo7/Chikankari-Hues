import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Head>
        <title>Chikankari Hues | Handcrafted Elegance</title>
        <meta name="description" content="Premium Chikankari fashion" />
      </Head>

      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-6">
          <Image 
            src="/logo1.jpeg" 
            alt="Chikankari Hues" 
            width={120} 
            height={40}
            className="h-10 w-auto"
          />
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="mb-16 text-center">
          <div className="relative h-96 overflow-hidden rounded-lg">
            <Image
              src="/main1.png"
              alt="Chikankari embroidery"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h2 className="mt-8 text-3xl font-bold text-rose-800">
            Timeless Handcrafted Fashion
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover our exclusive collection of premium Chikankari wear
          </p>
        </section>
      </main>
    </div>
  )
}
// Force rebuild
