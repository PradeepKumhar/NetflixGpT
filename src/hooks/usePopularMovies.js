import { useDispatch } from "react-redux";
import { ApiOptions } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", ApiOptions);
      const data = await response.json();
      dispatch(addPopularMovies(data.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, [dispatch]); 

};

export default usePopularMovies;
