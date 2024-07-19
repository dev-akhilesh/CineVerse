// @ts-nocheck

import UseTrendingList from "@/hooks/useTrandingList";
import { MdOutlineExpandMore } from "react-icons/md";
import TvShowCard from "../TvShowCard";
import { useState } from "react";
import LoadingSkeleton from "../LoadingSkeleton";

const TrendingTv = () => {
  const { trendingData, isLoading } = UseTrendingList("tv");
  const [expand, setExpand] = useState(false);

  return (
    <div>
      <div className="p-3 mb-4">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setExpand(!expand)}
        >
          <h1 className="text-2xl font-semibold p-5 py-8">Trending Tv</h1>
          <span className="text-4xl text-gray-500">
            {<MdOutlineExpandMore />}
          </span>
        </div>
        {isLoading && (
          <div className="p-10">
            <LoadingSkeleton />
          </div>
        )}
        {!isLoading && (
          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-y-3">
            {!expand &&
              trendingData?.slice(0, 10).map((movie) => (
                <div key={movie.id}>
                  <TvShowCard tvShowResult={movie} />
                </div>
              ))}
            {expand &&
              trendingData?.map((movie) => (
                <div key={movie.id}>
                  <TvShowCard tvShowResult={movie} />
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingTv;
