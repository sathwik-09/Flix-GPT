import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";



const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+ movieId + "/videos?",
      API_OPTIONS
    );
    const json = await data.json();
    const Filtertariler = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = Filtertariler.length ? Filtertariler[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
}

export default useMovieTrailer;