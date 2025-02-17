import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {
  const {movieResults, movieNames} = useSelector((store) => store.gpt);
  if(!movieResults) return null;
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
    {movieNames.map((movieName, index) => <MovieList title={movieName[0]} movies={movieResults[index]} key={movieName} />)} 
    </div>
  )
}

export default GptMovieSuggestions