import MovieList from "@/components/MovieList";
import Player from "@/components/Player";
import SearchList from "@/components/SearchMovie/SearchList";
import Trending from "@/components/Trending/Trending";
import TvShowList from "@/components/TvShowList";
import TvShowPlayer from "@/components/TvShowPlayer";
import { Routes, Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Trending />} />
      <Route path="/movies/" element={<MovieList />} />
      <Route path="/player/:playerId" element={<Player />} />
      <Route path="/tvshowplayer/:playerId" element={<TvShowPlayer />} />
      <Route path="/tvshows/" element={<TvShowList />} />
      <Route path="/search/:searchName/" element={<SearchList />} />
    </Routes>
  );
};

export default AllRoutes;
