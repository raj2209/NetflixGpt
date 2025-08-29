import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        movieTrailers: null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addMovieTrailers:(state,action)=>{
            state.movieTrailers=action.payload;
        }
    }
})

export const {addNowPlayingMovies, addMovieTrailers}=moviesSlice.actions;
export default moviesSlice.reducer;