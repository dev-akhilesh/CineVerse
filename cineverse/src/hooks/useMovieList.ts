// @ts-nocheck
import { useState, useEffect } from "react";
import apiClient from "@/services/api-client";

export interface MovieResult {
  adult: boolean;
  id: number;
  original_language: string;
  original_title: string;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  name?: string;
}

interface FetchMovieList {
  page: number;
  results: MovieResult[];
  total_pages?: number;
}

interface TotalPages {
  total_pages: number;
}

interface Props {
  currentPage: number;
}

const useMovieList = (
  currentPage: number,
  genres?: number | null,
) => {
  const [movieLists, setMovieLists] = useState<MovieResult[]>();
  const [totalPages, setTotalPages] = useState<TotalPages>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovieList = async () => {
    try {
      setIsLoading(true);
      const res = await apiClient.get<FetchMovieList>("/discover/movie", {
        params: {
          page: currentPage,
          with_genres: genres,
        },
      });
      setMovieLists(res.data.results);
      setTotalPages(res.data.total_pages);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovieList();
  }, [currentPage, genres]);

  return { movieLists, totalPages, isLoading };
};

export default useMovieList;
