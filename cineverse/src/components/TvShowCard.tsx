// @ts-nocheck
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const TvShowCard = ({ tvShowResult }) => {
  const navigate = useNavigate();
  // console.log(tvShowResult);

  return (
    <Card
      className="border-0 "
      onClick={() => navigate(`/tvshowplayer/${tvShowResult.id}`)}
    >
      <CardContent>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${tvShowResult.poster_path}`}
            alt="poster"
            className="hover:opacity-80 transition-all"
          />
          <h1 className="mt-3">{tvShowResult.name}</h1>
        </div>
      </CardContent>
    </Card>
  );
};

export default TvShowCard;
