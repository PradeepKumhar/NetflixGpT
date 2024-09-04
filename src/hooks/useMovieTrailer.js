import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ApiOptions } from '../utils/constant';
import { addMovieTrailer } from '../utils/movieSlice';

const useMovieTrailer = ({movieId})=>{
  const movie_trailer = useSelector(store => store.movies.movieTrailer);
    const dispatch = useDispatch();

    const getMoviesVideos = async () =>{
     
        const data = await fetch(" https://api.themoviedb.org/3/movie/" + movieId + "/videos",ApiOptions);
        const json = await data.json();
        
        const filterData = json.results.filter((video)=>video.type === "Trailer");
        dispatch(addMovieTrailer(filterData[0].key));
    };

    useEffect(()=>{
      if(!movie_trailer)  getMoviesVideos();
     
    },[dispatch]);
      
};

export default useMovieTrailer;
