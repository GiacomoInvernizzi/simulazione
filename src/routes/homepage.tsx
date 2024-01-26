import { Link, useLoaderData } from "react-router-dom";
import { MovieList } from "../components/MovieList";
import { MovieType } from "../types/types";
import getMovies from "../OMDb_api/getMovies";

export async function loader() {
  const movies = await getMovies();
  return movies;
}


export const Homepage = () => {
  const data = useLoaderData() as { Search: MovieType[] };
  return (
    <>
      <div>Questa è la homepage</div>
      <nav>
        <Link to={"/detail"}>Dettaglio</Link>
      </nav>
      <MovieList movies={data.Search}/>
    </>
  );
};
