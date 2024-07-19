import { useParams } from "react-router-dom";

const TvShowPlayer = () => {
  const { playerId } = useParams();
  const movieUrl = `https://vidsrc.xyz/embed/tv/${playerId}`;

  return (
    <div className="iframe-container">
      <iframe
        title="Tv Show Player"
        src={movieUrl}
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full sm:h-screen"
      ></iframe>
    </div>
  );
};

export default TvShowPlayer;
