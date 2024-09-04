import React, { useState, useEffect } from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (movies && movies.length > 0 && !selectedMovie) {
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setSelectedMovie(randomMovie);
    }
  }, [movies, selectedMovie]);

  if (!selectedMovie) return <p>Loading...</p>;

  const { original_title, overview, id } = selectedMovie;

  return (
    <div className="relative">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default React.memo(MainContainer);