// @ts-nocheck
import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { useContext } from "react";
import { SearchResultContext } from "@/contexts/searchResult.context";

const useMultiSearch = (input: string, currentPage: number) => {
  const { setSearchData, setTotalPage } = useContext(SearchResultContext);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSearch = async () => {
    try {
      setIsLoading(true);
      const res = await apiClient.get("/search/multi", {
        params: {
          query: input,
          page: currentPage,
        },
      });
      setSearchData(res.data.results);
      setTotalPage(res.data.total_pages);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSearch();
  }, [input, currentPage]);

  return { isLoading };
};

export default useMultiSearch;
