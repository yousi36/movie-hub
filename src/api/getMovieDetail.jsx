
export async function getMovieDetail({params}) {
  const id=params.id;
  console.log("i am getMovieDetail Api",id)
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}&plot=full`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Response("Failed to fetch", { status: response.status });
  }

  const data = await response.json();
  if (data.Response === "False") {
    throw new Response(data.Error, { status: 404 });
  }

  return data;
}
