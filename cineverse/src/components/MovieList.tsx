// @ts-nocheck
import useMovieList from "@/hooks/useMovieList";
import MovieCard from "./MovieCard";
import PaginationComponent from "./PaginationComponent";

import { useContext, useState } from "react";
import { GenresContext } from "@/contexts/genres.context";
import LoadingSkeleton from "./LoadingSkeleton";

interface MovieList {
  movieLists: MovieList;
  totalpages: number;
}

const MovieList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { genres } = useContext(GenresContext);

  const { movieLists, totalPages, isLoading } = useMovieList(
    currentPage,
    genres,
  );

  return (
    <div className="p-3 mb-4">
      <h1 className="text-4xl font-semibold p-5 py-8">Movies</h1>
      {isLoading && (
        <div className="p-10">
          <LoadingSkeleton />
        </div>
      )}
      {!isLoading && (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-y-3">
          {movieLists?.map((movieList) => {
            return (
              <div key={movieList.id}>
                <MovieCard movieResult={movieList} />
              </div>
            );
          })}
        </div>
      )}
      <PaginationComponent
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default MovieList;
