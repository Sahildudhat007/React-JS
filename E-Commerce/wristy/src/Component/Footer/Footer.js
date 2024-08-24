import React from 'react'
import { Link } from 'react-router-dom'

// asset
import asset33 from '../../Assets/asset 33.svg'
import asset34 from '../../Assets/asset 34.svg'
import asset35 from '../../Assets/asset 35.svg'
import asset36 from '../../Assets/asset 36.svg'
import asset37 from '../../Assets/asset 37.svg'
import asset38 from '../../Assets/asset 38.svg'

// react icon
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

// css link
import './footer.css'

function Footer() {
    return (
        <div>
            <section className='footer border-t'>
                <div className='w-layout container mx-auto px-10'>
                    <div className='ft-logo-wrap grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 items-center text-center gap-5 justify-between py-6'>
                        <img src={asset33} alt="" />
                        <img src={asset34} alt="" />
                        <img src={asset35} alt="" />
                        <img src={asset36} alt="" />
                        <img src={asset37} alt="" />
                        <img src={asset38} alt="" />
                    </div>
                </div>
                <div className='footer-wrap container mx-auto px-10 py-8 bg-black'>
                    <div className='w-layout-blockcontainer'>
                        <div className=" flex max-w-8xl flex-col items-start space-x-8 md:flex-row">
                            <div className="ft-left w-full px-4 md:w-3/4 lg:px-0">
                                <h1 className="max-w-sm text-xl font-semibold mb-2 text-white">STAY IN TOUCH.</h1>
                                <p className="max-w-sm text-sm text-stone-300">Subscribe to our newsletter and stay updated on the latest trends, exclusive offers & exciting releases in the world of watches.</p>
                                <form action="" className="mt-4 inline-flex w-full items-center md:w-3/4">
                                    <input
                                        className="flex h-10 w-full border border-white/30 bg-transparent px-3 py-2 placeholder:text-xs text-white placeholder:text-gray focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="email"
                                        placeholder="Email address"
                                    ></input>
                                    <button
                                        type="button"
                                        className="ml-4 px-5 py-3 text-xs border border-white font-semibold text-white shadow-sm hover:bg-white hover:text-black/80  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                            <div className="ft-right mt-8 grid grid-cols-1 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
                                <div className=''>
                                    <h1 className='ft-sub-title text-white mb-2'>PAGES</h1>
                                        <ul className='ft-menu'>
                                            <li><Link to="about" className='text-zinc-400 text-sm hover:text-white'>About us</Link></li>
                                            <li><Link to="categories" className='text-zinc-400 text-sm hover:text-white'>Categories</Link></li>
                                            <li><Link to="shop" className='text-zinc-400 text-sm hover:text-white'>Shop</Link></li>
                                            <li><Link to="blogs" className='text-zinc-400 text-sm hover:text-white'>Blogs</Link></li>
                                            <li><Link to="reviews" className='text-zinc-400 text-sm hover:text-white'>Reviews</Link></li>
                                            <li><Link to="/faq" className='text-zinc-400 text-sm hover:text-white'>FAQ</Link></li>
                                            <li><Link to="contact" className='text-zinc-400 text-sm hover:text-white'>Contact us</Link></li>
                                        </ul>
                                </div>
                                <div className=''>
                                    <h1 className='ft-sub-title text-white mb-2'>CATEGORIES</h1>
                                        <ul className='ft-menu'>
                                            <li><a href="" className='text-zinc-400 text-sm hover:text-white'>Chronograph Watches</a></li>
                                            <li><a href="" className='text-zinc-400 text-sm hover:text-white'>Skeleton Watches</a></li>
                                            <li><a href="" className='text-zinc-400 text-sm hover:text-white'>Leather Watches</a></li>
                                            <li><a href="" className='text-zinc-400 text-sm hover:text-white'>Smart Watches</a></li>
                                            <li><a href="" className='text-zinc-400 text-sm hover:text-white'>Women's Watch</a></li>
                                            <li><a href="" className='text-zinc-400 text-sm hover:text-white'>Men's Watch</a></li>
                                        </ul>
                                </div>
                                <div className=''>
                                    <h1 className='ft-sub-title text-white mb-2'>RESOURCES</h1>
                                        <ul className='ft-menu'>
                                            <li><a href="" className='text-zinc-400 text-sm hover:text-white'>Privacy Policy</a></li>
                                            <li><a href="" className='text-zinc-400 text-sm hover:text-white'>Return Policy</a></li>
                                            <li><a href="" className='text-zinc-400 text-sm hover:text-white'></a></li>
                                            <li><a href="" className='text-zinc-400 text-sm hover:text-white'>Terms & Conditions</a></li>
                                            <li><a href="" className='text-zinc-400 text-sm hover:text-white'>License</a></li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-20 mb-3" />
                        <div className="ft-bottom mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
                            <div className="inline-flex items-center">
                                <p className='text-xs text-zinc-400'>&#169; 2024 Wristy. Designed by <a href="#" className='hover:text-white'>Nixar.</a> Powered by <a href="#" className='hover:text-white'>Webflow.</a></p>
                            </div>
                            <div className="mt-4 md:mt-0 flex gap-2">
                                <a href="#" className='border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-600 rounded-full p-2'><RiTwitterXFill className='text-white text-sm' /></a>
                                <a href="#" className='border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-600 rounded-full p-2'><FaFacebookF className='text-white text-sm' /></a>
                                <a href="#" className='border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-600 rounded-full p-2'><FaYoutube className='text-white text-sm' /></a>
                                <a href="#" className='border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-600 rounded-full p-2'><FaInstagram className='text-white text-sm' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer