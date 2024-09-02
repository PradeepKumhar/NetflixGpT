import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ title, movies }) {
//   console.log(movies); // This logs the array of 20 movies

  // Check if movies is not null or undefined and has elements before mapping
  if (!movies || movies.length === 0) {
    return <p>No movies available</p>;
  }


  return (
    <div className='p-6 '>
       <h1 className='text-3xl py-4 text-white'>{title}</h1>
       <div className='flex overflow-x-scroll'>
     
      <div className='flex'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} poster={movie.poster_path} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default MovieList;
