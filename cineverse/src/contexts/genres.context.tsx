// @ts-nocheck
import { createContext, useState } from "react";

export const GenresContext = createContext<{
  genres: number | null;
  setGenres: (data: number) => void;
}>({
  genres: null,
  setGenres: () => {},
});

export const GenresProvider = ({ children }: { children: React.ReactNode }) => {
  const [genres, setGenres] = useState(null);
  // console.log(genres);
  const value = { genres, setGenres };

  return (
    <GenresContext.Provider value={value}>{children}</GenresContext.Provider>
  );
};
