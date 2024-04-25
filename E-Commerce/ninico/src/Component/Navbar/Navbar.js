import React from 'react'
import Categories from '../Categories/Categories'

import '../Navbar/navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className='main-menu-area mt-5'>
            <div className='container mx-auto px-5 flex items-center justify-between'>
                <div className='main-manu flex items-center'>
                    <Categories/>
                    {/* <button className='cat-btn'>
                        <i class="fa-solid fa-bars mr-3"></i>
                        Categories
                    </button> */}
                    <div className='dropdown1'>
                        <button className='dropbtn1'>
                            Home
                            <i class="fa-solid fa-angle-down ml-1"></i>
                        </button>
                        <div className='dropdown-content1 ml-4 bg-white'>
                            <ul className='w-[15rem] my-3'>
                                <li> <a href="#">Wooden Home</a> </li>
                                <li> <a href="#">Fashion Home</a> </li>
                                <li> <a href="#">Furniture Home</a> </li>
                                <li> <a href="#">Cosmetics Home</a> </li>
                                <li> <a href="#">Food Grocery</a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className='dropdown1'>
                        <button className='dropbtn1'>
                            Shop
                            <i class="fa-solid fa-angle-down ml-1"></i>
                        </button>
                        <div className='dropdown-content1 ml-4 bg-white'>
                            <ul className='w-[15rem] my-3'>
                                <li> <a href="#">Shop</a> </li>
                                <li> <a href="#">Shop 2</a> </li>
                                <li> <a href="#">Shop Details</a> </li>
                                <li> <a href="#">Shop Details 2</a> </li>
                                <li> <a href="#">Shop Location</a> </li>
                                <li> <a href="#">Cart</a> </li>
                                <li> <a href="#">Sign In</a> </li>
                                <li> <a href="#">Checkout</a> </li>
                                <li> <a href="#">Wishlist</a> </li>
                                <li> <a href="#">Product Track</a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className='dropdown1'>
                        <button className='dropbtn1'>
                            Pages
                            <i class="fa-solid fa-angle-down ml-1"></i>
                        </button>
                        <div className='dropdown-content1 ml-4 bg-white'>
                            <div className='flex'>
                                <ul className='w-[15rem] my-3'>
                                    <li className='ml-4 mb-3 text-sm font-bold'> <h1 className='hover:text-red-500'>PAGE LAYOUT</h1> </li>
                                    <li> <a href="#">Shop Filters V1</a> </li>
                                    <li> <a href="#">Shop Filters V2</a> </li>
                                    <li> <a href="#">Shop Sidebar</a> </li>
                                    <li> <a href="#">Shop Right Sidebar</a> </li>
                                    <li> <a href="#">Shop List View</a> </li>
                                </ul>

                                <ul className='w-[15rem] my-3'>
                                    <li className='ml-4 mb-3 text-sm font-bold'> <h1 className='hover:text-red-500'>PAGE LAYOUT</h1> </li>
                                    <li> <a href="#">About</a> </li>
                                    <li> <a href="#">Cart</a> </li>
                                    <li> <a href="#">Checkout</a> </li>
                                    <li> <a href="#">Sign In</a> </li>
                                    <li> <a href="#">Log In</a> </li>
                                </ul>

                                <ul className='w-[15rem] my-3'>
                                    <li className='ml-4 mb-3 text-sm font-bold'> <h1 className='hover:text-red-500'>PAGE TYPE</h1> </li>
                                    <li> <a href="#">Product Track</a> </li>
                                    <li> <a href="#">Wishlist</a> </li>
                                    <li> <a href="#">404 / Error</a> </li>
                                    <li> <a href="#">Coming Soon</a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='dropdown1'>
                        <button className='dropbtn1'>
                            Blog
                            <i class="fa-solid fa-angle-down ml-1"></i>
                        </button>
                        <div className='dropdown-content1 ml-4 bg-white'>
                            <ul className='w-[15rem] my-3'>
                                <li> <a href="#">Blog</a> </li>
                                <li> <a href="#">Blog Details</a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className='dropdown1'>
                        <button className='dropbtn1'>Contact</button>
                    </div>
                </div>
                <div className='menu-contact'>
                    <ul className='flex items-center'>
                        <li className='mr-5'>
                            <a href="#" className='hover:text-red-500'>
                            <i class="fa-solid fa-phone-flip mr-2 text-red-600"></i>
                            908. 408. 501. 89
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-red-500'>
                            <i class="fa-solid fa-location-dot mr-2 text-red-600"></i>
                            Find Store
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <div className='main-menu-area mt-5'>
            <div className='container mx-auto px-5'>
                <div className='row flex items-center justify-between'>
                <div className=''>
                    <div className=' items-center ml-1'>
                        <div className='main-manu'>
                            <div className='dropdown1'>
                                <button className='dropbtn1'>
                                    Home
                                    <i class="fa-solid fa-angle-down ml-1"></i>
                                </button>
                                <div className='dropdown-content1 ml-5 bg-white'>
                                    <ul className='w-[15rem] my-3'>
                                    <li> <a href="#">Wooden Home</a> </li>
                                    <li> <a href="#">Fashion Home</a> </li>
                                    <li> <a href="#">Furniture Home</a> </li>
                                    <li> <a href="#">Cosmetics Home</a> </li>
                                    <li> <a href="#">Food Grocery</a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='dropdown1'>
                                <button className='dropbtn1'>
                                    Shop
                                    <i class="fa-solid fa-angle-down ml-1"></i>
                                </button>
                                <div className='dropdown-content1 ml-5 bg-white'>
                                    <ul className='w-[15rem] my-3'>
                                    <li> <a href="#">Shop</a> </li>
                                    <li> <a href="#">Shop 2</a> </li>
                                    <li> <a href="#">Shop Details</a> </li>
                                    <li> <a href="#">Shop Details 2</a> </li>
                                    <li> <a href="#">Shop Location</a> </li>
                                    <li> <a href="#">Cart</a> </li>
                                    <li> <a href="#">Sign In</a> </li>
                                    <li> <a href="#">Checkout</a> </li>
                                    <li> <a href="#">Wishlist</a> </li>
                                    <li> <a href="#">Product Track</a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='dropdown1'>
                                <button className='dropbtn1'>
                                    Pages
                                    <i class="fa-solid fa-angle-down ml-1"></i>
                                </button>
                                <div className='dropdown-content1 ml-5 bg-white'>
                                    <div className='flex'>
                                        <ul className='w-[15rem] my-3'>
                                            <li className='ml-4 mb-3 text-sm font-bold'> <h1 className='hover:text-red-500'>PAGE LAYOUT</h1> </li>
                                            <li> <a href="#">Shop Filters V1</a> </li>
                                            <li> <a href="#">Shop Filters V2</a> </li>
                                            <li> <a href="#">Shop Sidebar</a> </li>
                                            <li> <a href="#">Shop Right Sidebar</a> </li>
                                            <li> <a href="#">Shop List View</a> </li>
                                        </ul>

                                        <ul className='w-[15rem] my-3'>
                                            <li className='ml-4 mb-3 text-sm font-bold'> <h1 className='hover:text-red-500'>PAGE LAYOUT</h1> </li>
                                            <li> <a href="#">About</a> </li>
                                            <li> <a href="#">Cart</a> </li>
                                            <li> <a href="#">Checkout</a> </li>
                                            <li> <a href="#">Sign In</a> </li>
                                            <li> <a href="#">Log In</a> </li>
                                        </ul>

                                        <ul className='w-[15rem] my-3'>
                                            <li className='ml-4 mb-3 text-sm font-bold'> <h1 className='hover:text-red-500'>PAGE TYPE</h1> </li>
                                            <li> <a href="#">Product Track</a> </li>
                                            <li> <a href="#">Wishlist</a> </li>
                                            <li> <a href="#">404 / Error</a> </li>
                                            <li> <a href="#">Coming Soon</a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='dropdown1'>
                                <button className='dropbtn1'>
                                    Blog
                                    <i class="fa-solid fa-angle-down ml-1"></i>
                                </button>
                                <div className='dropdown-content1 ml-5 bg-white'>
                                    <ul className='w-[15rem] my-3'>
                                        <li> <a href="#">Blog</a> </li>
                                        <li> <a href="#">Blog Details</a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='dropdown1'>
                                <button className='dropbtn1'>Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='menu-contact '>
                    <ul className='flex items-center'>
                        <li className='mr-5'>
                            <a href="#" className='hover:text-red-500'>
                            <i class="fa-solid fa-phone-flip mr-2 text-red-600"></i>
                            908. 408. 501. 89
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-red-500'>
                            <i class="fa-solid fa-location-dot mr-2 text-red-600"></i>
                            Find Store
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        </div> */}
    </div>
  )
}

export default Navbar