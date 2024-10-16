import React, { useEffect, useState } from 'react'

import Home from '../Home/Home'

// css
import './navbar.css'

// icons
import { HiOutlineBars3 } from "react-icons/hi2";

import { HiX, HiOutlineMenu } from "react-icons/hi";

// assets 
import asset0 from '../../assets/asset 0.svg'
import asset1 from '../../assets/asset 1.svg'

function Navbar() {

    const [scrollHeader, setScrollHeader] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrollHeader(true);
            } else {
                setScrollHeader(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <React.Fragment>
            <header
                id='navbar'
                className={`header items-center container mx-auto px-10 border-b border-gray-400 w-full fixed z-20 ${scrollHeader ? 'scroll-header' : ''}`}
            >
                <nav className="flex items-center justify-between py-5">
                    <a href="..." className="">
                        <img src={scrollHeader ? asset0 : asset1} alt="Logo" className='w-32' />
                    </a>
                    <div className="hidden lg:block">
                        <ul className="flex gap-8">
                            <li className="">
                                <a href="#home"
                                    onClick={() => setActiveNav("#home")}
                                    className={`text-sm font-semibold ${scrollHeader ? 'text-black' : 'text-teal-500'}`}
                                >
                                    HOME
                                </a>
                            </li>
                            <li className="">
                                <a href="#about"
                                    className={`text-sm font-semibold ${scrollHeader ? 'text-black' : 'text-white hover:text-teal-500'}`}
                                >
                                    ABOUT
                                </a>
                            </li>
                            <li className="">
                                <a href="#packages"
                                    className={`text-sm font-semibold ${scrollHeader ? 'text-black' : 'text-white hover:text-teal-500'}`}
                                >
                                    PACKAGES
                                </a>
                            </li>
                            <li className="">
                                <a href="#gallery"
                                    className={`text-sm font-semibold ${scrollHeader ? 'text-black' : 'text-white hover:text-teal-500'}`}
                                >
                                    GALLERY
                                </a>
                            </li>
                            <li className="">
                                <a href="#team"
                                    className={`text-sm font-semibold ${scrollHeader ? 'text-black' : 'text-white hover:text-teal-500'}`}
                                >
                                    TEAM
                                </a>
                            </li>
                            <li className="">
                                <a href="#testimonials"
                                    className={`text-sm font-semibold ${scrollHeader ? 'text-black' : 'text-white hover:text-teal-500'}`}
                                >
                                    TESTIMONIALS
                                </a>
                            </li>
                            <li className="">
                                <a href="#faq"
                                    className={`text-sm font-semibold ${scrollHeader ? 'text-black' : 'text-white hover:text-teal-500'}`}
                                >
                                    FAQS
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <button className={`py-2 px-5 bg-teal-500 text-white`}>
                            Contact us
                        </button>
                    </div>
                </nav>
                {/* <div className='xl:hidden'>
                    <HiOutlineBars3 className='text-3xl text-white' />
                </div> */}
            </header>
            <div>
                <Home />
            </div>
        </React.Fragment>
    )
}

export default Navbar
