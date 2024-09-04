import React from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

export default function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return <p>Loading movies...</p>;

  // Ensure consistent movie selection for both title and background
  const mainMovie = movies[Math.floor(Math.random() * movies.length)];
  const { original_title, overview, id } = mainMovie;


  return (
    <div className="relative ">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
}
