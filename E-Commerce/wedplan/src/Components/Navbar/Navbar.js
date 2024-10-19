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
                className={`header items-center container mx-auto px-5 md:px-10 lg:px-10 border-b border-gray-400 w-full fixed z-20 ${scrollHeader ? 'scroll-header' : ''}`}
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
                                    className={`text-sm font-semibold ${scrollHeader ? 'text-black' : 'text-teal-500'} ${activeNav === "#home" ? "nav__link active-link" : "nav__link"}`}
                                >
                                    HOME
                                </a>
                            </li>
                            <li className="">
                                <a href="#about"
                                    onClick={() => setActiveNav("#about")}
                                    className={`text-sm font-semibold ${scrollHeader ? 'text-black' : 'text-white hover:text-teal-500'}  ${activeNav === "#about" ? "nav__link active-link" : "nav__link"}`}
                                >
                                    ABOUT
                                </a>
                            </li>
                            <li className="">
                                <a href="#packages"
                                    onClick={() => setActiveNav("#packages")}
                                    className={`text-sm font-semibold ${scrollHeader ? 'text-black' : 'text-white hover:text-teal-500'} ${activeNav === "#packages" ? "nav__link active-link" : "nav__link"}`}
                                >
                                    PACKAGES
                                </a>
                            </li>
                            <li className="">
                                <a href="#gallery"
                                    onClick={() => setActiveNav("#gallery")}
                                    className={`text-sm font-semibold ${scrollHeader ? 'text-black' : 'text-white hover:text-teal-500'} ${activeNav === "#gallery" ? "nav__link active-link" : "nav__link"}`}
                                >
                                    GALLERY
                                </a>
                            </li>
                            <li className="">
                                <a href="#team"
                                    onClick={() => setActiveNav("#team")}
                                    className={`text-sm font-semibold ${scrollHeader ? 'text-black' : 'text-white hover:text-teal-500'} ${activeNav === "#team" ? "nav__link active-link" : "nav__link"}`}
                                >
                                    TEAM
                                </a>
                            </li>
                            <li className="">
                                <a href="#testimonials"
                                    onClick={() => setActiveNav("#testimonials")}
                                    className={`text-sm font-semibold ${scrollHeader ? 'text-black' : 'text-white hover:text-teal-500'} ${activeNav === "#testimonials" ? "nav__link active-link" : "nav__link"}`}
                                >
                                    TESTIMONIALS
                                </a>
                            </li>
                            <li className="">
                                <a href="#faq"
                                    onClick={() => setActiveNav("#faq")}
                                    className={`text-sm font-semibold ${scrollHeader ? 'text-black' : 'text-white hover:text-teal-500'} ${activeNav === "#faq" ? "nav__link active-link" : "nav__link"}`}
                                >
                                    FAQS
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <a href='#contact' className={`py-2 px-5 bg-teal-500 text-white max-sm:hidden md:hidden lg:block`}>
                            Contact us
                        </a>
                        <div className=' md:block lg:hidden'>
                            <HiOutlineBars3 className={`text-3xl ${scrollHeader ? 'text-black' : 'text-white'} `} />
                        </div>
                    </div>
                </nav>
            </header>
            <div>
                <Home />
            </div>
        </React.Fragment>
    )
}

export default Navbar
