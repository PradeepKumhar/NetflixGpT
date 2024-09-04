import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const VideoTitle = ({ title, overview }) => {
  console.log("function call: ",title);
  return (
    <div className='w-[300px]   absolute pt-40 px-4  mx-auto text-white bg-gradient-to-b fro m-black aspect-video md:w-screen md:pt-36 md:px-12'>
      <h1 className='text-1xl font-bold mb-1 mt-5  md:text-5xl md:mb-4 md:mt-36  '>{title}</h1>
      <p className='py-4 w-[60vw]  text-xs font-semibold md:text-2xl'>
        {overview}
      </p>
      <div className='flex space-x-4'>
        <button className='bg-gray-800 text-white p-3 px-4 md:p-4 md:px-8  rounded-lg transition duration-300 ease-in-out text-xs md:text-xl  hover:bg-gray-700'>
        <FontAwesomeIcon icon={faPlay} />  Play
        </button>
        <button className='bg-gray-600 text-white p-3 px-4 md-4 md:px-8 rounded-lg transition duration-300 ease-in-out text-xs md:text-xl  hover:bg-gray-500'>
          More Info
        </button>
      </div>
      
    </div>
  );
};

export default VideoTitle;
