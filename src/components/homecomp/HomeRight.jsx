import React from 'react'
import './css/right.css'
import rightData from './data/rightData'
import RightCard from './RightCard'

const HomeRight = () => {
  return (
    <>
      {rightData.map((items, i) => {
        return (
          <div key={i}>
            <RightCard items={items} />
          </div>
        )
      })}
    </>
  )
}

export default HomeRight