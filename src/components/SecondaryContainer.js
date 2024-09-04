import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

export default function SecondaryContainer() {
  const movies = useSelector(store => store.movies);

  return (
    <div className='bg-black'>
      <div className=' -mt-[140px] relative z-10 bg-transparent md:-mt-60'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Popular TV-series"} movies={movies.popularTvSeries} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcommingMovies} />
      </div>
    </div>
  );
}
