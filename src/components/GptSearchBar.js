import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
const GptSearchBar = () => {
        const langIdentifier = useSelector((state)=> state.config.language)
        console.log("language", langIdentifier)
  return (
    <div className='relative z-10 pt-[10%] w-1/2 mx-auto'>
        <form className='bg-black flex justify-center items-center grid grid-cols-12'>
          <input className="m-2 px-3 py-1 col-span-10" type='text' placeholder={lang[langIdentifier].gptPlaceholderSearch}/>
          <button className='bg-red-600 px-4 py-1 m-2 rounded cursor-pointer col-span-2'>{lang[langIdentifier].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;