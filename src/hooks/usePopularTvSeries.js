import { useDispatch, useSelector } from "react-redux";
import { ApiOptions } from "../utils/constant";
import {  addPopularTvSeries } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularTvSeries = () => {
  const popular_tv_series = useSelector(store => store.movies.popularTvSeries);
  const dispatch = useDispatch();

  const getPopularTvSeries = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1", ApiOptions);
      const data = await response.json();
      dispatch(addPopularTvSeries(data.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  useEffect(() => {
    if (!popular_tv_series)  getPopularTvSeries();
  }, [dispatch]); 

};

export default usePopularTvSeries;
