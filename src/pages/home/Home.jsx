import React from 'react'
import HomeLeft from '../../components/homecomp/HomeLeft'
import HomeRight from '../../components/homecomp/HomeRight'
import Movies from '../../components/moviescomp/Movies'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='home-items'>
        <div className='home-item-left'><HomeLeft /></div>
        <div className='home-item-right'><HomeRight /></div>
      </div>
      <div><Movies /></div>
    </div>
  )
}

export default Home