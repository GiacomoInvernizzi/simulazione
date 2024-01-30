import { getDetailMovies } from "../OMDb_api/getDetailMovie";

export async function loader(id: string) {
  const movies = await getDetailMovies(id);
  return movies;
}

export const DetailPage = () => {
  return <div>Questo è la pagina del dettaglio</div>;
};
