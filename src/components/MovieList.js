import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  if (!movies || movies.length === 0) {
    return <p>Loading movies...</p>; // Handle empty or null movies
  }
  return (
    <div className='px-6'>
      <h1 className='py-4 text-white text-3xl'>{title}</h1>
      <div className='flex overflow-x-scroll no-scrollbar'>
        <div className='flex'>
          {movies.map((movie)=>(
            <MovieCard key={movie.id} posterPath={movie.poster_path}/>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default MovieList