import React from 'react'
import { AiFillStar } from "react-icons/ai";

const MoviesList = ({items}) => {
  return (
    <div className='movie-list-container'>
      <div className='movie-image'>
        <img src={items.image} alt={items.image} />
      </div>
      <div className='movie-details'>
        <p className='movie-star'><AiFillStar /></p>
        <p className='movie-rating'>{items.rating}</p>
        <p className='movie-quality'>{items.quality}</p>
        <p className='movie-year'>{items.year}</p>
      </div>
      <p className='movie-title'>{items.title}</p>
      <div className='flex-button'>
        <button className='watch-move'>Watch now</button>
      </div>
    </div>
  )
}

export default MoviesList