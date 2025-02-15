
import { useSelector } from "react-redux";
import useMovieTariler from "../Hooks/useMovieTrailer"


const VideoPlayer = ({ movieId }) => {
  const trailerVideo = useSelector((store)=> store.movies?.addTrailerVideo)
  useMovieTariler(movieId);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
