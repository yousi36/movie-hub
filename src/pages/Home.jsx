
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1600&q=80"
        alt="Cinema"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay (dark gradient for readability) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
          Welcome to MovieVerse
        </h1>
        <Link
          to="/movie"
          className="px-8 py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition"
        >
          Explore Movies
        </Link>
      </div>
    </div>
  );
}
