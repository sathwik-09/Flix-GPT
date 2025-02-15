import React from 'react'
import { useSelector } from 'react-redux'
import VideoPlayer from './VideoPlayer';
import VideoTitle from './VideoTitle';

const FirstContainer = () => {

  const movies = useSelector(store => store.movies?.addNowPlayingMovies);
  if(!movies) return;
  const mainMovie = movies[0];
   
  const {original_title, overview, id} = mainMovie;


  return (
    <div>
      <VideoTitle title={original_title} overview = {overview}/>
      <VideoPlayer movieId = {id}/>
      
    </div>
  )
}

export default FirstContainer