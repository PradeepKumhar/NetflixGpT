import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'



function MovieCard({poster}) {
  

  return (
    <div className='w-52 pr-4'>
        <img alt="movie_poster" src= {IMG_CDN_URL + poster}/>
    </div>
  )
}

export default MovieCard