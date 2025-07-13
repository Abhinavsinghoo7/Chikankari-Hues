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
          <h1 className="text-3xl font-bold text-rose-800">Chikankari Hues</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="mb-16 text-center">
          <div className="relative h-96 overflow-hidden rounded-lg">
            <Image
              src="/hero.jpg"  // Make sure this exists in public/
              alt="Chikankari embroidery"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="mt-8 text-2xl font-medium text-gray-800">
            Timeless Handcrafted Fashion
          </h2>
        </section>
      </main>
    </div>
  )
}
