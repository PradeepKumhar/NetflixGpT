import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice(
    {
        name: "GptSlice",
        initialState : {
            gptSearch: false,
            movieResults:null,
            movieNames : null,

        },

        reducers : {
            addGptSearch : (state)=>{
                state.gptSearch = !state.gptSearch;
            },
            addMovieResult: (state,action)=>{
                const {movieName,movieResult} = action.payload;
                state.movieNames = movieName;
                state.movieResults = movieResult;

            }
        }
    }
);

export const {addGptSearch,addMovieResult} = gptSlice.actions;
export default gptSlice.reducer;
