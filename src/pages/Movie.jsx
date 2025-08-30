import { useLoaderData } from "react-router-dom";
import Card from "../ui/Card";
export function Movie() {
    const movies = useLoaderData(); 
  return (
    <div className="p-6">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map(movie => (
          <Card key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </div>
  );
}


