export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Chikankari Hues</h3>
              <p>Handcrafted elegance since 2010.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-amber-200">About Us</a></li>
                <li><a href="#" className="hover:text-amber-200">Shipping Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p>hello@chikankarihues.com</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }