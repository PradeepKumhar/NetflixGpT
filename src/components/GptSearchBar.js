import React, { useState, useEffect, useRef } from 'react';
import getGeminiResponse from '../utils/geminiResponse';
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/lang';
import { ApiOptions } from '../utils/constant';
import { addMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const Lang = useSelector(store => store.config.changeLang);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const searchText = useRef(null);

const searchMovie = async (movie) => {
  const data = await fetch(" https://api.themoviedb.org/3/search/movie?query=" + movie + "&language=en-US&page=1",ApiOptions);
  const result = await data.json();
  return result;
}

  const handleGptSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const prompt = "Act as a movie recommandation system and suggest some movie for this  query"+ searchText.current.value + " only give me name of 5 movies , comma seperated like the example given ahead. Example Result: Gadar , sholay, Koi mil gya, kill , 3 Idiots";
    
    try {
      const result = await getGeminiResponse(prompt);
      const gptMovies = result.split(",");

      
        const promissArray = gptMovies.map(movie => searchMovie(movie));
        const resultArray = await Promise.all(promissArray);

        console.log(resultArray);
        console.log(gptMovies);

        dispatch(addMovieResult({movieName:gptMovies, movieResult:resultArray}));


        
      
      
    } catch (error) {
  
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={handleGptSearch}>
        <input
          className='p-4 m-4 col-span-9'
          type='text'
          ref={searchText}
          placeholder={lang[Lang].gptPlaceholder}
        />
        <button
          className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? lang[Lang].searching : lang[Lang].search}
        </button>
      </form>

    </div>
  );
};

export default GptSearchBar;