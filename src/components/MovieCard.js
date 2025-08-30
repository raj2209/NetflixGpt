import React from 'react'
import { MOVIES_POSTER } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
  return (
    <div className='w-36'>
            <img src={MOVIES_POSTER+posterPath} />
    </div>
  )
}

export default MovieCard