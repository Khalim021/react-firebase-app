import React from 'react'
import { AiFillStar } from "react-icons/ai";
import './css/right.css'

const RightCard = ({items}) => {
  return (
    <>
      <div className='right-header-card'>
        <div className='right-header-image'><img src={items.image} alt={items.image} /></div>
        <div className='right-header-detail'>
          <div className='right-header-details'>
            <p className='right-star'><AiFillStar /></p>
            <p className='right-rating'>{items.rating}</p>
            <p className='right-hd'>{items.quality}</p>
          </div>
          <p className='right-title'>{items.title}</p>
          <div className='extra-details'>
            <p className='right-description'>{items.description}</p>
            <div className='right-button'>
              <button className='main-button'>Watch now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RightCard