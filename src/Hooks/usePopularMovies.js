import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";


const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popualrMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
    const data = await response.json();
    dispatch(addPopularMovies(data.results));
  }

  useEffect(() => {
    !popualrMovies && getPopularMovies();
  }, [])

}

export default usePopularMovies;