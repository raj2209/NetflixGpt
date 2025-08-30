import React from 'react'
import GptSearchBar from './GptSearchBar';
import { BACKGROUND_IMAGE } from '../utils/constants';

const GptSearchContainer = () => {
    return (
        <div className=''>
            <div className='absolute'>
            <img src={BACKGROUND_IMAGE} alt='Background' />
            </div>
            <GptSearchBar />
        </div>
    )
}

export default GptSearchContainer;