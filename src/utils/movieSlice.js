import { createSlice } from '@reduxjs/toolkit';


const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    addNowPlayingMovies: null,
    addTrailerVideo : null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.addNowPlayingMovies = action.payload;
    },
    addTrailerVideo : (state, action) => {
      state.addTrailerVideo = action.payload;
    }
  }, 
})

export const {addNowPlayingMovies, addTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer;
