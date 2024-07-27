import React from 'react'

// assets link
import asset102 from '../../Assets/asset102.svg'
import asset109 from '../../Assets/asset109.svg'
import asset110 from '../../Assets/asset110.svg'
import asset111 from '../../Assets/asset 111.svg'

// css link
import './navbar.css'
import { Link } from 'react-router-dom';

import { Menu, X } from 'lucide-react'

const menuItems = [
    {
        name: 'About',
        to: 'about',
    },
    {
        name: 'Categories',
        to: 'categories',
    },
    {
        name: 'Shop',
        to: 'shop',
    },
    {
        name: 'Blogs',
        to: 'blogs',
    },
    {
        name: 'Reviews',
        to: 'reviews',
    },
    {
        name: 'Contact',
        to: 'contact',
    },
]

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div>
            <div className="relative w-full bg-white border-b ">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center space-x-2">
                        <Link to="/">
                            <img src={asset102} alt="" />
                        </Link>
                    </div>
                    <div className="hidden lg:block">
                        <ul className="inline-flex space-x-6">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.to}
                                        className="text-sm text-stone-800"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <div className='nav-right flex items-center'>
                            <Link to="">
                                <img src={asset111} alt="" />
                            </Link>
                            <Link to="login" className='mx-4'>
                                <img src={asset109} alt="" />
                            </Link>
                            <Link to="" className='flex items-center text-stone-800'>
                                <img src={asset110} alt="" />
                                cart (0)
                            </Link>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                    </div>
                    {isMenuOpen && (
                        <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="px-5 pb-6 pt-5">
                                    <div className="flex items-center justify-between">
                                        <div className="inline-flex items-center space-x-2">
                                            <Link to="/">
                                                <img src={asset102} alt="" />
                                            </Link>
                                        </div>
                                        <div className="-mr-2">
                                            <button
                                                type="button"
                                                onClick={toggleMenu}
                                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                            >
                                                <span className="sr-only">Close menu</span>
                                                <X className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex justify-center">
                                        <nav className="grid gap-y-4 text-center">
                                            {menuItems.map((item) => (
                                                <a
                                                    key={item.name}
                                                    to={item.to}
                                                    className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                                >
                                                    <span className="ml-3 text-center text-sm text-stone-600">
                                                        {item.name}
                                                    </span>
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>


            {/* <section className='header'>
                <div className='navbar container mx-auto px-10 py-6 border-b border-stone-300'>
                    <div className='w-layout-blockcontainer container w-container'>
                        <div className='navbar-wrap flex items-center justify-between'>
                            <Link to="/">
                                <img src={asset102} alt="" />
                            </Link>
                            <div className='nav-menu-wrap'>
                                <nav className='nav-menu bg w-nav-menu'>
                                    <ul className='flex'>
                                        <li className='mx-3'>
                                            <Link to='about' className='text-stone-800 text-sm'>About</Link>
                                        </li>
                                        <li className='mx-3'>
                                            <Link to="categories" className='text-stone-800 text-sm'>Categories</Link>
                                        </li>
                                        <li className='mx-3'>
                                            <Link to="shop" className='text-stone-800 text-sm'>Shop</Link>
                                        </li>
                                        <li className='mx-3'>
                                            <Link to="blogs" className='text-stone-800 text-sm'>Blogs</Link>
                                        </li>
                                        <li className='mx-3'>
                                            <Link to="reviews" className='text-stone-800 text-sm'>Reviews</Link>
                                        </li>
                                        <li className='mx-3'>
                                            <Link to="contact" className='text-stone-800 text-sm'>Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className='nav-right flex items-center'>
                                <a href="#">
                                    <img src={asset111} alt="" />
                                </a>
                                <a href="#" className='mx-4'>
                                    <img src={asset109} alt="" />
                                </a>
                                <a href="#" className='flex items-center text-stone-800'>
                                    <img src={asset110} alt="" />
                                    cart (0)
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default Navbar
