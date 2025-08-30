export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Brand / Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">🎬 MovieVerse</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            MovieVerse is your one-stop destination to explore movie details, 
            watch trailers, and stay updated with the latest in cinema. 
            Enjoy your movie journey with us!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/movies" className="hover:text-white transition">Movies</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition">🌐</a>
            <a href="#" className="hover:text-white transition">🐦</a>
            <a href="#" className="hover:text-white transition">📸</a>
            <a href="#" className="hover:text-white transition">▶️</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        {new Date().getFullYear()} MovieVerse. All rights reserved.
      </div>
    </footer>
  );
}
