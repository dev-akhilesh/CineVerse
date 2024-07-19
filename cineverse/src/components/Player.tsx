// @ts-nocheck
import { useParams } from "react-router-dom";

const Player = () => {
  const { playerId } = useParams();
  const movieUrl = `https://vidsrc.xyz/embed/movie/${playerId}`;

  return (
    <div>
      <iframe
        className="w-full h-screen"
        src={movieUrl}
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Player;
