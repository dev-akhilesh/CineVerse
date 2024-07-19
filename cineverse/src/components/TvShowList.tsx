// @ts-nocheck
import useTvShowList from "@/hooks/useTvShowList";
import { useState } from "react";
import PaginationComponent from "./PaginationComponent";
import TvShowCard from "./TvShowCard";
import LoadingSkeleton from "./LoadingSkeleton";

const TvShowList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { tvShows, totalPages, isLoading } = useTvShowList({ currentPage });

  return (
    <div className="p-3 mb-4">
      <h1 className="text-4xl font-semibold p-5 py-8">Tv Shows</h1>
      {isLoading && (
        <div className="p-10">
          <LoadingSkeleton />
        </div>
      )}
      {!isLoading && (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-y-3">
          {tvShows?.map((tvShow) => {
            return (
              <div key={tvShow.id}>
                <TvShowCard tvShowResult={tvShow} />
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

export default TvShowList;
