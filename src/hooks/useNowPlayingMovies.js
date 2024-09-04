import { useDispatch, useSelector } from "react-redux";
import { ApiOptions } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect, useRef } from "react";

const useNowPlayingMovies = () => {
  const now_playing = useSelector(store => store.movies.nowPlayingMovies);
  const dispatch = useDispatch();
  const hasCalledApi = useRef(false);

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
    if (!now_playing && !hasCalledApi.current) {
      hasCalledApi.current = true;
      getNowPlayingMovies();
    }
  }, []);
};

export default useNowPlayingMovies;