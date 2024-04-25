import React from 'react'
import logo from '../Assets/logo.png'
import uk from '../Assets/uk.png'

import '../Header/header.css'

const Header = () => {
  return (
    <div>

      <header>
        <div className='logo-area'>
          <div className='container mx-auto px-5 mt-2 flex items-center justify-between'>
            <div className='logo flex items-center'>
              <div className='manu-icon'>
                <button className='mr-4 mt-2'><i class="fa-solid fa-bars font-bold text-2xl text-black"></i></button>
              </div>
              <a href="logo" className='logo'>
                <img src={logo} alt="logo-img" className='mr-10' />
              </a>
              <div className='search ml-10'>
                <div className='search-bar bg-slate-100 rounded-md w-[100%] flex items-center'>
                  <i className="fa-solid fa-magnifying-glass pl-3"></i>
                  <input type="text" placeholder='Search products...' className='p-3 rounded-md min-w-[150%] bg-slate-100' />
                </div>
              </div>
            </div>
            <div className='head flex items-center'>
              {/* <div className='search'>
                <div className='search-bar border bg-slate-100 rounded-md min-w-[150%] flex items-center'>
                  <i className="fa-solid fa-magnifying-glass pl-3"></i>
                  <input type="text" placeholder='Search product' className='p-3 min-w-[150%] rounded-md bg-slate-100' />
                </div>
              </div> */}
              <div className='header-brand flex items-center'>
                <div className='dropdown'>
                  <button className='dropbtn flex items-center p-2 font-semibold rounded-md'>
                    <img src={uk} alt="" className='mr-2' />
                    English
                    <i class="fa-solid fa-angle-down ml-1"></i>
                  </button>
                  <div className='dropdown-content bg-white'>
                    <a href="#">Arabic</a>
                    <a href="#">Spanish</a>
                    <a href="#">Mandarin</a>
                  </div>
                </div>
                <div className='header-meta-value ml-5'>
                  <select className='border border-gray-400 p-3 text-lg rounded-md'>
                    <option value="USD">USD</option>
                    <option value="YEAN">YEAN</option>
                    <option value="EURO">EURO</option>
                  </select>
                </div>
                <div className='header-meta-social ml-5'>
                  <button className='header-cart ml-3'>
                    <i class="fa-solid fa-cart-shopping text-xl"></i>
                    <span className='product-count'>0</span>
                  </button>
                  <a href="user" className='ml-5'><i class="fa-regular fa-user text-xl"></i></a>
                  <button className='header-cart heart ml-5'>
                    <i class="fa-regular fa-heart text-xl"></i>
                    <span className='product-count'>0</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

    </div>
  )
}

export default Header
