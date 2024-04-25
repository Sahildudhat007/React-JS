import React from 'react'

import './navbar.css'
import logo from '../Component/Assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <header className=''>
        <div className='container head mx-auto'>
            <a href="logo" className='logo'>
              <img src={logo} alt="logo" />
            </a>
            <div className='nav'>
              <ul className='navbar'>
                <li className='navlist'>
                  <Link to="/" className='navlink active'>Home</Link>
                </li>
                <li className='navlist'>
                  <Link to="/about" className='navlink'>About</Link>
                </li>
                <li className='navlist'>
                  <Link to="/contact" className='navlink'>Contact</Link>
                </li>
              </ul>
            </div>
            <div className='btn'>
              <button><Link to="/login">Login</Link></button>
              <button>Register</button>
            </div>
            <button className='menubtn'>
                <i class="fa-solid fa-bars text-white"></i>
            </button>
        </div>
      </header>

        {/* <div className='container'>
            <ul className='nav-bar'> 
                <li className='nav-list'> <Link to="/" className='nav-link'>Home</Link> </li>
                <li className='nav-list'> <Link to="/about" className='nav-link'>About</Link> </li>
                <li className='nav-list'> <Link to="/contact" className='nav-link'>Contact</Link> </li>
                <li className='nav-list'>
                    <button className='btn'>Log In</button>
                </li>
            </ul>
        </div> */}
        
    </div>
  )
}

export default Navbar