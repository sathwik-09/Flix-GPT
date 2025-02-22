import Header from "./Header"
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import FirstContainer from "./FirstContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {

  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header/>
      {
        showGptSearch ? <GptSearch/> : <>
        <FirstContainer/>
        <SecondContainer/>
        </>
      }
    </div>
  )
}

export default Browse