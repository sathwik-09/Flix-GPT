import Header from "./Header"
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import FirstContainer from "./FirstContainer";
import SecondContainer from "./SecondContainer";


const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <FirstContainer/>
      <SecondContainer/>
    </div>
  )
}

export default Browse