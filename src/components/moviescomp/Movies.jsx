import React from 'react'
import './css/movies.css'
import moviesData from './data/moviesData'
import MoviesList from './MoviesList'

const Movies = () => {
  return (
    <>
    <div className='movies'><h5>Movies</h5></div>
    <div className='movies-container'>
        {moviesData.map((items, i) => {
        return (
          <div key={i}>
            <MoviesList items={items}/>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Movies