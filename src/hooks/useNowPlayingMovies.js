import { useDispatch } from "react-redux";
import { ApiOptions } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", ApiOptions);
      const data = await response.json();
      dispatch(addNowPlayingMovies(data.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, [dispatch]); 

};

export default useNowPlayingMovies;
