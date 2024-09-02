import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
     name :"movies",
     initialState :{
        nowPlayingMovies:null,
        movieTrailer:null,
        popularMovies:null,
        topRatedMovies:null,
        upcommingMovies:null,
        popularTvSeries:null,
     },

     reducers : {
        addNowPlayingMovies : (state, action)=>{
           state.nowPlayingMovies = action.payload;
        },
        addMovieTrailer : (state,action) =>{
            state.movieTrailer = action.payload;
        },
        addPopularMovies: (state,action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state,action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpcommingMovies: (state,action)=>{
            state.upcommingMovies = action.payload;
        },
        addPopularTvSeries: (state,action)=>{
            state.popularTvSeries = action.payload;
        },
     },
});

export const {addNowPlayingMovies,addMovieTrailer,addPopularMovies,addPopularTvSeries,addUpcommingMovies,addTopRatedMovies} = movieSlice.actions;
export default movieSlice.reducer;