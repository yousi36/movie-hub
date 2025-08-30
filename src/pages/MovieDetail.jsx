// pages/MovieDetail.jsx
import { useLoaderData } from "react-router-dom";

export default function MovieDetail() {
    const movie = useLoaderData();
    return (
        <div className="max-w-5xl mx-auto p-8 grid md:grid-cols-2 gap-8 items-start">
            {/* Poster */}
            <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-[50vw] max-w-md h-[70vh] object-cover rounded-2xl shadow-lg mx-auto"
            />

            {/* Movie Details */}
            <div className="flex flex-col justify-center">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                    {movie.Title}
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
                    {movie.Plot}
                </p>
            </div>
        </div>

    );
}
