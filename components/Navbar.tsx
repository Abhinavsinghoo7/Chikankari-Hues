import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="Chikankari Hues" 
            width={120} 
            height={40} 
          />
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/collections" className="text-gray-800 hover:text-chikankari-red">Collections</Link>
          <Link href="/about" className="text-gray-800 hover:text-chikankari-red">Our Story</Link>
          <Link href="/contact" className="text-gray-800 hover:text-chikankari-red">Contact</Link>
        </div>
      </div>
    </nav>
  );
}