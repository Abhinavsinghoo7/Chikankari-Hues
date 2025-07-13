import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Chikankari Hues | Premium Handcrafted Fashion</title>
        <meta name="description" content="Authentic Chikankari clothing" />
      </Head>

      {/* Main Hero Section */}
      <div className="relative h-screen">
        <Image
          src="/main1.png"
          alt="Chikankari Embroidery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-5xl font-bold mb-6">CHIKANKARI HUES</h1>
            <p className="text-xl mb-8">
              Premium handcrafted Chikankari collections
            </p>
            <button className="bg-rose-700 hover:bg-rose-800 text-white px-8 py-3 rounded-md">
              Shop Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
