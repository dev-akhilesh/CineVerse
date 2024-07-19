// @ts-nocheck
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { Input } from "./ui/input";
import { SearchResultContext } from "@/contexts/searchResult.context";
import Genres from "./Genres/Genres";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const navigate = useNavigate();
  const { searchText, setSearchText } = useContext(SearchResultContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    navigate(`/search/${e.target.value}`);

    if (e.target.value.length === 0) {
      navigate("/movies");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${setSearchText}`);
  };

  return (
    <div className="flex justify-between md:px-10 sm:px-5 px-5 items-center gap-3 text-xl  my-3 ">
      <img
        src={logo}
        alt="logo"
        className="md:h-14 sm:h-9 h-9  hover:opacity-80 cursor-pointer"
        onClick={() => navigate("/")}
      />
      {/* <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        CineVerse
      </h1> */}

      <div className="flex gap-3 items-center">
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Search"
            className="border-gray-500 rounded-2xl md:w-fit sm:w-[30vw]"
            value={searchText}
            onChange={handleChange}
          />
        </form>

        <div className="block md:hidden">
          <MobileNav />
        </div>
        <div className="md:block sm:hidden hidden">
          <div className="flex gap-6 items-center">
            <Genres />
            <Link to={`/movies`}>
              <div>Movies</div>
            </Link>
            <Link to={`/tvshows`}>
              <div>TvShows</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
