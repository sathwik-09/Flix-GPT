import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondContainer = () => {
  const movies = useSelector((store)=> store.movies);
  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-20 p-4 pl-12'>
      <MovieList  title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Sci-Fi"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondContainer