import { useDispatch } from "react-redux";
import { ApiOptions } from "../utils/constant";
import { addUpcommingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", ApiOptions);
      const data = await response.json();
      dispatch(addUpcommingMovies(data.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  useEffect(() => {
    getUpcomingMovies ();
  }, [dispatch]); 

};

export default useUpcomingMovies;
