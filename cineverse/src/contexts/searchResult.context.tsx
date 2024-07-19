// @ts-nocheck
import { MovieResult } from "@/hooks/useMovieList";
import { createContext, useState } from "react";

export const SearchResultContext = createContext<{
  searchData: MovieResult | null;
  setSearchData: (data: MovieResult) => void;
  setTotalPage: (data: number) => void;
  totalPages: number | null;
  searchText: string | null;
  setSearchText: (data: string) => void;
}>({
  searchData: null,
  setSearchData: () => {},
  setTotalPage: () => {},
  totalPages: null,
  searchText: null,
  setSearchText: () => {},
});

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchData, setSearchData] = useState<MovieResult | null>(null);
  const [totalPages, setTotalPage] = useState(null);
  const [searchText, setSearchText] = useState("");

  const value = {
    searchData,
    setSearchData,
    setTotalPage,
    totalPages,
    searchText,
    setSearchText,
  };

  return (
    <SearchResultContext.Provider value={value}>
      {children}
    </SearchResultContext.Provider>
  );
};
