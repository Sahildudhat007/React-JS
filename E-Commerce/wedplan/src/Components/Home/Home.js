import React from 'react'

// css link
import './home.css'

// react icon
import { FiPhone } from "react-icons/fi";
import { AiOutlineFileAdd } from "react-icons/ai";


function Home() {
    return (
        <React.Fragment>
            <section id='home' className='hero-section bg-center bg-cover w-full container mx-auto md:bg-center px-5 md:px-10 lg:px-10 md:pt-[130px] md:pb-[90px] lg:pt-[16%] pt-5 bg-slate-400 flex flex-col justify-center'>
                <div className='flex items-center mb-4'>
                    <div className='w-7 h-[2px] hidden md:block bg-teal-500'></div>
                    <h5 className='text-2xl text-teal-500 font-normal ml-0 md:ml-3'>Planning weddings in london since 2010</h5>
                </div>
                <div className='w-[100%] max-w-[550px]'>
                    <h1 className='text-3xl md:text-6xl lg:text-6xl text-white font-normal  leading-[1.2em]'>We'll make your wedding unique and lifetime memorable</h1>
                </div>
                <div>
                    <div className=' mt-4 md:mt-14 mb-4'>
                        <h5 className='text-xl text-white'>Plan your dream wedding with us</h5>
                    </div>
                    <div className='flex flex-wrap items-center space-y-3 md:space-y-0 space-x-0 md:space-x-4'>
                        <a href="tel:1800-123" className='flex items-center px-12 py-3 bg-teal-500 text-white text-[17px]'><FiPhone className='mr-2' />1800-123</a>
                        <a href='...' className='flex items-center px-8 py-3 bg-white text-[17px]'><AiOutlineFileAdd className='mr-2' />Download Brochure</a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home
