import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

export default function SecondaryContainer() {
  const movies = useSelector(store => store.movies);
  console.log(movies.popularTvSeries);
  return (
    <div className='bg-black'>
    <div className='-mt-64 relative z-10 bg-transparent'>
      <MovieList title ={"Now Playing"} movies= {movies.nowPlayingMovies}/>
      <MovieList title ={"Top Rated"} movies= {movies.topRatedMovies}/>
      <MovieList title ={"Popular"} movies= {movies.popularMovies}/>
      <MovieList title ={"Popular TV-series"} movies= {movies.popularTvSeries}/>
      <MovieList title ={"Upcoming Movies"} movies= {movies.upcommingMovies}/>
    </div>
    </div>
  )
}
