import React from 'react'

// assets
import asset14 from '../../assets/asset 14.jpeg'
import asset15 from '../../assets/asset 15.jpeg'
import asset16 from '../../assets/asset 16.jpeg'

function Team() {
    return (
        <>
            <div className='container mx-auto px-3 py-12'>
                <div className='lg:px-3'>
                    <div className='text-center mx-auto mb-12 max-w-[600px]'>
                        <h1 className='mb-4 font-bold text-[2.5rem]' style={{ fontFamily: "Lobster Two, cursive" }}>Popular Teachers</h1>
                        <p className='mb-4 text-[#74787C]'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                        <div className='mt-6 lg:px-3'>
                            <div className='relative'>
                                <img src={asset14} alt="" className='w-[75%] rounded-[50%]' />
                                <div className='absolute bottom-0 right-0 flex flex-col items-center justify-center w-[250px] h-[250px] bg-[#FFFFFF] rounded-full' style={{ border: "17px solid #FFF5F3" }}>
                                    <h3 className='font-bold text-[1.3rem] md:text-[1.75rem] mb-2' style={{ fontFamily: "Lobster Two, cursive" }}>Full Name</h3>
                                    <p className='mb-4 text-[#74787C]'>Designation</p>
                                    <div className='flex items-center justify-center'>
                                        <a href="..." className='w-[38px] h-[38px] flex justify-center items-center mx-1 bg-[#FE5D37] rounded-full'>
                                            <i className='fab fa-facebook-f text-white'></i>
                                        </a>
                                        <a href="..." className='w-[38px] h-[38px] flex justify-center items-center mx-1 bg-[#FE5D37] rounded-full'>
                                            <i className='fab fa-twitter text-white'></i>
                                        </a>
                                        <a href="..." className='w-[38px] h-[38px] flex justify-center items-center mx-1 bg-[#FE5D37] rounded-full'>
                                            <i className='fab fa-instagram text-white'></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-6 lg:px-3'>
                            <div className='relative'>
                                <img src={asset15} alt="" className='w-[75%] rounded-[50%]' />
                                <div className='absolute bottom-0 right-0 flex flex-col items-center justify-center w-[250px] h-[250px] bg-[#FFFFFF] rounded-full' style={{ border: "17px solid #FFF5F3" }}>
                                    <h3 className='font-bold text-[1.3rem] md:text-[1.75rem] mb-2' style={{ fontFamily: "Lobster Two, cursive" }}>Full Name</h3>
                                    <p className='mb-4 text-[#74787C]'>Designation</p>
                                    <div className='flex items-center justify-center'>
                                        <a href="..." className='w-[38px] h-[38px] flex justify-center items-center mx-1 bg-[#FE5D37] rounded-full'>
                                            <i className='fab fa-facebook-f text-white'></i>
                                        </a>
                                        <a href="..." className='w-[38px] h-[38px] flex justify-center items-center mx-1 bg-[#FE5D37] rounded-full'>
                                            <i className='fab fa-twitter text-white'></i>
                                        </a>
                                        <a href="..." className='w-[38px] h-[38px] flex justify-center items-center mx-1 bg-[#FE5D37] rounded-full'>
                                            <i className='fab fa-instagram text-white'></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-6 lg:px-3'>
                            <div className='relative'>
                                <img src={asset16} alt="" className='w-[75%] rounded-[50%]' />
                                <div className='absolute bottom-0 right-0 flex flex-col items-center justify-center w-[250px] h-[250px] bg-[#FFFFFF] rounded-full' style={{ border: "17px solid #FFF5F3" }}>
                                    <h3 className='font-bold text-[1.3rem] md:text-[1.75rem] mb-2' style={{ fontFamily: "Lobster Two, cursive" }}>Full Name</h3>
                                    <p className='mb-4 text-[#74787C]'>Designation</p>
                                    <div className='flex items-center justify-center'>
                                        <a href="..." className='w-[38px] h-[38px] flex justify-center items-center mx-1 bg-[#FE5D37] rounded-full'>
                                            <i className='fab fa-facebook-f text-white'></i>
                                        </a>
                                        <a href="..." className='w-[38px] h-[38px] flex justify-center items-center mx-1 bg-[#FE5D37] rounded-full'>
                                            <i className='fab fa-twitter text-white'></i>
                                        </a>
                                        <a href="..." className='w-[38px] h-[38px] flex justify-center items-center mx-1 bg-[#FE5D37] rounded-full'>
                                            <i className='fab fa-instagram text-white'></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team
