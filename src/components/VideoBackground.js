import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {
    useMovieTrailer(movieId);
    const movieTrailer = useSelector((state) => state.movies?.movieTrailers);
    return (
        <div className='w-full'>
            <iframe className='w-full aspect-video' src={`https://www.youtube.com/embed/${movieTrailer}?si=OgnGzv8BaJBlVZHa&autoplay=1&mute=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
        </div>
    )
}

export default VideoBackground