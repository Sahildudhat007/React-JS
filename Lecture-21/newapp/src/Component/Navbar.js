import React from 'react'

import '../Component/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

        {/* <div className='container'>
            <ul className='nav-bar'>
                <li className='nav-list'> <a href="/" className='nav-link'>Home</a> </li>
                <li className='nav-list'> <a href="/about" className='nav-link'>About</a> </li>
                <li className='nav-list'> <a href="/services" className='nav-link'>Services</a> </li>
                <li className='nav-list'> <a href="/contact" className='nav-link'>Contact</a> </li>
                <li className='nav-list'> <a href="/blog" className='nav-link'>Blog</a> </li>
            </ul>
        </div> */}


        <div className='container'>
            <ul className='nav-bar'>
                <li className='nav-list'> <Link to="/" className='nav-link'>Home</Link> </li>
                <li className='nav-list'> <Link to="/about" className='nav-link'>About</Link> </li>
                <li className='nav-list'> <Link to="/services" className='nav-link'>Services</Link> </li>
                <li className='nav-list'> <Link to="/contact" className='nav-link'>Contact</Link> </li>
                <li className='nav-list'> <Link to="/blog" className='nav-link'>Blog</Link> </li>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar