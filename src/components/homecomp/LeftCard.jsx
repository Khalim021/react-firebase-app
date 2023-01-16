import React from 'react'
import { AiFillStar } from "react-icons/ai";
import './css/left.css'

const LeftCard = ({items}) => {
  return (
    <div className='left-card-container'>
      <div className='left-card-image'>
        <img src={items.image} alt={items.image}/>
      </div>
      <div className='movie-card-deatails'>
        <p className='left-title'>{items.title}</p>
        <div className='rating-details'>
          <p className='left-star'><AiFillStar /></p>
          <p className='left-rating'>{items.rating}</p>
          <p className='left-quality'>{items.quality}</p>
        </div>
        <p className='left-card-desc'>{items.description}</p>
      </div>
    </div>
  )
}

export default LeftCard