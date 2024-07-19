// @ts-nocheck

import MovieCard from "../MovieCard";
import PaginationComponent from "../PaginationComponent";

import { useContext, useState } from "react";
import { SearchResultContext } from "@/contexts/searchResult.context";
import useMultiSearch from "@/hooks/useMultiSearch";
import TvShowCard from "../TvShowCard";
import LoadingSkeleton from "../LoadingSkeleton";

const SearchList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { searchData, totalPages, searchText } =
    useContext(SearchResultContext);
  const { isLoading } = useMultiSearch(searchText, currentPage);

  return (
    <div className="p-3 mb-4">
      {isLoading && (
        <div className="p-10">
          <LoadingSkeleton />
        </div>
      )}
      {!isLoading && (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-y-3">
          {searchData?.map((movieList) => {
            return (
              <div key={movieList.id}>
                {/* {console.log(movieList)} */}
                {movieList.media_type === "movie" ? (
                  <MovieCard movieResult={movieList} />
                ) : (
                  <TvShowCard tvShowResult={movieList} />
                )}
                // <MovieCard movieResult={movieList} />
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

export default SearchList;
