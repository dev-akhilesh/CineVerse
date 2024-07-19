// @ts-nocheck
import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

const UseTrendingList = (trending: string = "movie") => {
  const [trendingData, setTrendingData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchTrending = async () => {
    try {
      setIsLoading(true);
      const res = await apiClient.get(`trending/${trending}/day`);
      setTrendingData(res.data.results);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return { trendingData, isLoading };
};

export default UseTrendingList;
