import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video absolute pt-36 px-12   mx-auto text-white bg-gradient-to-b from-black'>
      <h1 className='text-5xl font-bold mb-4 mt-36'>{title}</h1>
      <p className='py-4 text-md w-full md:w-2/3 lg:w-1/4 mb-6 text-white'>
        {overview}
      </p>
      <div className='flex space-x-4'>
        <button className='bg-gray-800 text-white p-4 px-8 text-xl rounded-lg transition duration-300 ease-in-out hover:bg-gray-700'>
        <FontAwesomeIcon icon={faPlay} />  Play
        </button>
        <button className='bg-gray-600 text-white p-4 px-8 text-xl rounded-lg transition duration-300 ease-in-out hover:bg-gray-500'>
          More Info
        </button>
      </div>
      
    </div>
  );
};

export default VideoTitle;
