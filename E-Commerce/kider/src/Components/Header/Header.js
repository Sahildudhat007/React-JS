import React from 'react'
import { useState } from "react";
import { useLocation } from "react-router-dom";

// css
import './header.css'

// assets
import asset20 from '../../assets/asset 20.svg'
import { Link } from 'react-router-dom'

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Function to toggle the navbar
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    // Helper function to determine if a link is active
    const isActive = (path) => location.pathname === path;

    return (
        <>
            <header className="container mx-auto">
                <nav className="py-4 px-3 lg:px-6 fixed top-0 left-0 w-full bg-white z-20 flex justify-between items-center">
                    <Link to="/">
                        <h1
                            className="font-bold text-3xl md:text-[2.5rem]"
                            style={{ color: "#FE5D37", fontFamily: "Lobster Two, cursive" }}
                        >
                            <i className="fa fa-book-reader me-4"></i>
                            Kider
                        </h1>
                    </Link>
                    <div className="hidden lg:block">
                        <ul className="font-medium flex items-center">
                            <li>
                                <Link
                                    to="/"
                                    className={`px-[15px] py-[30px] 
                                        ${isActive("/") ? "text-[#FE5D37]" : "hover:text-[#FE5D37]"}`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="aboutUs"
                                    className={`px-[15px] py-[30px] 
                                        ${isActive("/aboutUs") ? "text-[#FE5D37]" : "hover:text-[#FE5D37]"}`}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="classes"
                                    className={`px-[15px] py-[30px] 
                                        ${isActive("/classes") ? "text-[#FE5D37]" : "hover:text-[#FE5D37]"}`}
                                >
                                    Classes
                                </Link>
                            </li>
                            <li className="dropdown">
                                <Link
                                    // to="page"
                                    className={`dropbtn px-[15px] py-[30px] 
                                        ${isActive("/page") ? "text-[#FE5D37]" : "hover:text-[#FE5D37]"}`}
                                >
                                    Page
                                    <i className="fa-solid fa-caret-down ms-[5px]"></i>
                                </Link>
                                <div className="dropdown-content">
                                    <Link
                                        to="schoolFacilities"
                                        className={`
                                            ${isActive("/schoolFacilities") ? "bg-[#FE5D37]" : "hover:bg-[#eaeaea]"} 
                                            ${isActive("/schoolFacilities") ? "text-white" : "text-black"}`}>
                                        School Facilities
                                    </Link>
                                    <Link
                                        to="teachers"
                                        className={`
                                            ${isActive("/teachers") ? "bg-[#FE5D37]" : "hover:bg-[#eaeaea]"} 
                                            ${isActive("/teachers") ? "text-white" : "text-black"}`}>
                                        Popular Teachers
                                    </Link>
                                    <Link
                                        to="becomeaTeachers"
                                        className={`
                                            ${isActive("/becomeaTeachers") ? "bg-[#FE5D37]" : "hover:bg-[#eaeaea]"} 
                                            ${isActive("/becomeaTeachers") ? "text-white" : "text-black"}`}>
                                        Become A Teacher
                                    </Link>
                                    <Link
                                        to="appointments"
                                        className={`
                                            ${isActive("/appointments") ? "bg-[#FE5D37]" : "hover:bg-[#eaeaea]"} 
                                            ${isActive("/appointments") ? "text-white" : "text-black"}`}>
                                        Make Appointment
                                    </Link>
                                    <Link to="testimonial"
                                        className={`
                                            ${isActive("/testimonial") ? "bg-[#FE5D37]" : "hover:bg-[#eaeaea]"} 
                                            ${isActive("/testimonial") ? "text-white" : "text-black"}`}>
                                        Testimonial
                                    </Link>
                                    <Link
                                        to="error"
                                        className={`
                                            ${isActive("/error") ? "bg-[#FE5D37]" : "hover:bg-[#eaeaea]"} 
                                            ${isActive("/error") ? "text-white" : "text-black"}`}>
                                        404 Error
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <Link
                                    to="contactUs"
                                    className={`px-[15px] py-[30px] 
                                                ${isActive("/contactUs") ? "text-[#FE5D37]" : "hover:text-[#FE5D37]"
                                        }`}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <a
                            href="..."
                            className="text-white bg-[#FE5D37] px-3 py-[.375rem] text-base font-medium items-center align-middle rounded-full hover:bg-opacity-85"
                        >
                            Join Us
                            <i className="fa fa-arrow-right ms-4"></i>
                        </a>
                    </div>
                    <button
                        onClick={toggleNavbar}
                        className="lg:hidden border border-[#0000001a] rounded-[10px] py-1 px-3"
                    >
                        <img src={asset20} alt="menu" className="h-7 w-h-7" />
                    </button>
                </nav>
                {isOpen && (
                    <div className="lg:hidden fixed top-[60px] left-0 w-full bg-white z-10 shadow-md">
                        <ul className="font-medium flex flex-col items-center py-4">
                            <li>
                                <Link
                                    to="/home"
                                    className={`block px-4 py-2 
                                        ${isActive("/home") ? "text-[#FE5D37]" : "hover:text-[#FE5D37]"}`}
                                    onClick={toggleNavbar}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/aboutUs"
                                    className={`block px-4 py-2 
                                        ${isActive("/aboutUs") ? "text-[#FE5D37]" : "hover:text-[#FE5D37]"}`}
                                    onClick={toggleNavbar}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/classes"
                                    className={`block px-4 py-2 
                                        ${isActive("/classes") ? "text-[#FE5D37]" : "hover:text-[#FE5D37]"}`}
                                    onClick={toggleNavbar}
                                >
                                    Classes
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/page"
                                    className={`block px-4 py-2 
                                        ${isActive("/page") ? "text-[#FE5D37]" : "hover:text-[#FE5D37]"}`}
                                    onClick={toggleNavbar}
                                >
                                    Page
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contactUs"
                                    className={`block px-4 py-2 
                                        ${isActive("/contactUs") ? "text-[#FE5D37]" : "hover:text-[#FE5D37]"}`}
                                    onClick={toggleNavbar}
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="..."
                                    className="block text-white bg-[#FE5D37] px-4 py-2 text-base font-medium items-center align-middle rounded-full hover:bg-opacity-85"
                                    onClick={toggleNavbar}
                                >
                                    Join Us
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </header>


            {/* <header className='container mx-auto'>
                <nav className='py-4 px-3 lg:px-6 fixed top-0 left-0 w-full bg-white z-20 flex justify-between items-center'>
                    <Link to="/">
                        <h1 className='font-bold text-3xl md:text-[2.5rem]' style={{ color: "#FE5D37", fontFamily: "Lobster Two, cursive" }}>
                            <i className='fa fa-book-reader me-4'></i>
                            Kider
                        </h1>
                    </Link>
                    <div className='hidden lg:block'>
                        <ul className='font-medium flex items-center'>
                            <li>
                                <Link to="/home" className='text-[#FE5D37] px-[15px] py-[30px]'>Home</Link>
                            </li>
                            <li className='hover:text-[#FE5D37]'>
                                <Link to="/aboutUs" className='px-[15px] py-[30px]'>About Us</Link>
                            </li>
                            <li className='hover:text-[#FE5D37]'>
                                <Link to="/classes" className='px-[15px] py-[30px]'>Classes</Link>
                            </li>
                            <li className='dropdown hover:text-[#FE5D37]'>
                                <Link to="/page" className='dropbtn px-[15px] py-[30px]'>Page
                                    <i class="fa-solid fa-caret-down ms-[5px]"></i>
                                </Link>
                                <div class="dropdown-content">
                                    <a href="...">School Facilities</a>
                                    <a href="...">Popular Teachers</a>
                                    <a href="...">Become A Teachers</a>
                                    <a href="...">Make Appointment</a>
                                    <a href="...">Testimonial</a>
                                    <a href="...">404 Error</a>
                                </div>
                            </li>
                            <li className='hover:text-[#FE5D37]'>
                                <Link to="/contactUs" className='px-[15px] py-[30px]'>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='hidden lg:block'>
                        <a href="..." className='text-white bg-[#FE5D37] px-3 py-[.375rem] text-base font-medium items-center align-middle rounded-full hover:bg-opacity-85'>
                            Join Us
                            <i className='fa fa-arrow-right ms-4'></i>
                        </a>
                    </div>
                    <a href="..." className='lg:hidden border border-[#0000001a] rounded-[10px] py-1 px-3'>
                        <img src={asset20} alt="menu" className='h-7 w-h-7' />
                    </a>
                </nav>
            </header> */}
        </>
    )
}

export default Header
