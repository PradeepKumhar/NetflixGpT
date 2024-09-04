import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

function GptMovieSuggestion() {
  const { movieResults ,movieNames } = useSelector(store => store.gptSearch);

  if (!movieResults || movieResults.length === 0) return null;

  return (
    <div className=' m-2 md:p-4 md:m-4 bg-black text-white opacity-90'>
      <div>
        {movieResults.map((movie, index) => (
          <MovieList
            key={index} // Ideally, use a unique id if available
            title={movieNames[index]} // Adjust if `title` is not the right property
            movies={movie.results || []} // Provide an empty array as fallback
          />
        ))}
      </div>
    </div>
  );
}

export default GptMovieSuggestion;
