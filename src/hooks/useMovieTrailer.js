import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { ApiOptions } from '../utils/constant';
import { addMovieTrailer } from '../utils/movieSlice';

const useMovieTrailer = ({movieId})=>{
    const dispatch = useDispatch();
   console.log("Trailer movie Id: ", movieId);

    const getMoviesVideos = async () =>{
     
        const data = await fetch(" https://api.themoviedb.org/3/movie/" + movieId + "/videos",ApiOptions);
        const json = await data.json();
        
        const filterData = json.results.filter((video)=>video.type === "Trailer");
        dispatch(addMovieTrailer(filterData[0].key));
    };

    useEffect(()=>{
      getMoviesVideos();
    },[dispatch]);
      
};

export default useMovieTrailer;
