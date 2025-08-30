export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">About Us</h1>

      {/* Intro */}
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        Welcome to <span className="font-semibold">🎬 MovieVerse</span>, 
        your ultimate destination for discovering movies, exploring detailed information, 
        and keeping up with the latest trends in cinema. 
        We aim to bring the world of movies closer to you with a clean and engaging experience.
      </p>

      {/* Mission Section */}
      <div className="bg-gray-100 rounded-2xl p-8 mb-8 shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          At MovieVerse, our mission is simple: to create a platform where movie lovers 
          can explore films from all genres, learn about cast and crew, and discover 
          hidden gems. Whether you’re searching for classics or new blockbusters, 
          we’ve got you covered.
        </p>
      </div>

      {/* What We Offer */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white border rounded-2xl shadow p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">📚 Vast Movie Database</h3>
          <p className="text-gray-600">
            Browse through thousands of movies with detailed information like 
            plot, cast, release year, and more.
          </p>
        </div>
        <div className="bg-white border rounded-2xl shadow p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">⚡ Easy Navigation</h3>
          <p className="text-gray-600">
            With our smooth UI and quick search functionality, finding your favorite 
            movies has never been easier.
          </p>
        </div>
      </div>
    </div>
  );
}
