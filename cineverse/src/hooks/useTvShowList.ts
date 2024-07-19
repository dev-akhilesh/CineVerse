// @ts-nocheck
import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

const useTvShowList = ({ currentPage }) => {
  const [tvShows, setTvShows] = useState();
  const [totalPages, setTotalPages] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const FetchTvShowList = async () => {
    try {
      setIsLoading(true);
      const res = await apiClient.get("/discover/tv", {
        params: {
          page: currentPage,
        },
      });
      setTvShows(res.data.results);
      setTotalPages(res.data.total_pages);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    FetchTvShowList();
  }, [currentPage]);

  return { tvShows, totalPages, isLoading };
};

export default useTvShowList;
