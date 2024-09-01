import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const VideoBackground = (movieId) => {
    const [isMuted, setIsMuted] = useState(true);
    useMovieTrailer(movieId);
    const trailerVideo = useSelector(store => store.movies?.movieTrailer);


   

    const videoSrc = trailerVideo
        ? `https://www.youtube.com/embed/${trailerVideo}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=${trailerVideo}`
        : '';

    const toggleMute = () => {
        setIsMuted(prevMuted => !prevMuted);
    };

  

    return (
        <div className='w-screen'>
            {videoSrc ? (
                <>
                <iframe
                 className='w-screen aspect-video'
                 src={videoSrc}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    
                ></iframe>
                 <button
                        onClick={toggleMute}
                        className="absolute bottom-64 right-10 bg-gray-800 text-white p-2 rounded z-40"
                    >
                        <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
                    </button>
                    </>
            ) : (
                <p>Loading trailer...</p>
            )}
        </div>
    );
}


export default VideoBackground;