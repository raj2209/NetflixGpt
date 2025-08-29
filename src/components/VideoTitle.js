import React from 'react';
import PLAY_ICON from '../assets/play.png';
import INFO_ICON from '../assets/info-icon.svg';

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12 text-white absolute bg-gradient-to-r from-black w-full aspect-video flex flex-col gap-6'>
      <h1 className='text-xl font-bold'>{title}</h1>
      <p className='text-sm  w-1/4'>{overview}</p>
      <div className='flex gap-4'>
        <button className=' flex gap-2 bg-white text-black border border-solid px-4 py-1 rounded-md'><img src={PLAY_ICON} className="w-5"alt='Play'/>Play</button>
        <button className='flex gap-2 bg-gray-300 border border-solid px-4 py-1 rounded-md'><img src={INFO_ICON} className="w-5" alt='More Info'/>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle