
export async function getMovieData(search = "titanic", page = 1) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${search}&page=${page}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Response("Failed to fetch data", { status: response.status });
  }

  const data = await response.json();
  if (data.Response === "False") {
    throw new Response(data.Error, { status: 404 });
  }
  console.log(data.search)
  return data.Search; 
}
