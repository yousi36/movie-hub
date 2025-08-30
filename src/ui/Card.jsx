import { Link } from "react-router-dom";
export default function Card({ movie }) {
    console.log(movie.imdbID)
    return (
         <li className="flex flex-col items-center bg-white border rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
        alt={movie.Title}
        className="w-full h-72 object-cover"
      />
      <Link
        to={`/movie/${movie.imdbID}`}
        className="w-full px-4 py-3 bg-black text-white font-semibold text-center rounded-b-2xl hover:bg-gray-800 transition"
      >
        Watch Now
      </Link>
    </li>
    );
}
