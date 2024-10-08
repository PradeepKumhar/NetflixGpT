import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ title, movies }) {
  // Check if movies is not null or undefined and has elements before mapping
  if (!movies || movies.length === 0) {
    return <p>No movies available</p>;
  }

  return (
    <div className='p-6'>
      <h1 className='text-xl py-4 text-white md:text-3xl' >{title}</h1>
      <div className='flex overflow-x-scroll'>
        <div className='flex'>
          {movies.map((movie) => (
            movie.poster_path ? (
              <MovieCard key={movie.id} poster={movie.poster_path} />
            ) : null
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
