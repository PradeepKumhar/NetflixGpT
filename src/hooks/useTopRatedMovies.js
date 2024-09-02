import { useDispatch } from "react-redux";
import { ApiOptions } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", ApiOptions);
      const data = await response.json();
      dispatch(addTopRatedMovies(data.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  useEffect(() => {
    getTopRatedMovies ();
  }, [dispatch]); 

};

export default useTopRatedMovies;
