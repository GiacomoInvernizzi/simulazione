import { Box } from "@chakra-ui/react";
import { MovieType } from "../types/types";
import { MovieCard } from "./MovieCard";

type MovieListProps = {
    movies: MovieType[],
}

export const MovieList = ({ movies }: MovieListProps) => {
  return (
    <Box>
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          Title={movie.Title}
          Year={movie.Year}
          imdbID={movie.imdbID}
          Type={movie.Type}
          Poster={movie.Poster}
        />
      ))}
    </Box>
  );
};
