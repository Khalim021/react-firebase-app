import React, { useRef } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const navbarRef = useRef()

  const showNavbar = () => {
    navbarRef.current.classList.toggle('active')
  }

  return (
    <nav className='navbar-container'>
      <div className='firebase-brand'>
        <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
          Firebase
        </Link>
      </div>
      <Link to='#' className='toggle-nav' onClick={showNavbar}>
        <span className='line-bar'></span>
        <span className='line-bar'></span>
        <span className='line-bar'></span>
      </Link>
      <div className='navbar-items-container' ref={navbarRef}>
        <ul className='navbar-items'>
          <li className='nav-item'><Link to='/'>Home</Link></li>
          <li className='nav-item'><Link to='/movies'>Movies</Link></li>
          <li className='nav-item'><Link to='/shows'>Shows</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar