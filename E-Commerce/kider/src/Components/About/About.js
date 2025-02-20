import React from 'react'

// assets
import asset2 from '../../assets/asset 2.jpeg'
import asset3 from '../../assets/asset 3.jpeg'
import asset4 from '../../assets/asset 4.jpeg'
import asset5 from '../../assets/asset 5.jpeg'

function About() {
    return (
        <>
            <div className='container mx-auto py-12'>
                <div className='px-3'>
                    <div className='flex flex-wrap lg:flex-nowrap xl:gap-12 items-center'>
                        <div className='max-w-[100%] w-full lg:w-[50%] mt-12 lg:px-6'>
                            <h1 className='mb-6 text-[1.5rem] md:text-[2.5rem] text-[#103741] font-bold' style={{ fontFamily: "Lobster Two, cursive" }}>Learn More About Our Work And Our Cultural Activities</h1>
                            <p className='mb-4 text-[#74787C]'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <p className='mb-4 text-[#74787C]'>Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos, ipsum labore duo duo sit no sea diam. Et dolor et kasd ea. Eirmod diam at dolor est vero nonumy magna.</p>
                            <div className='grid md:grid-cols-2 items-center gap-6'>
                                <div className='mt-6'>
                                    <a href="..." className='text-white rounded-full px-12 py-4 bg-[#FE5D37]'>Read More</a>
                                </div>
                                <div className='mt-6 px-3'>
                                    <div className='flex items-center'>
                                        <img src={asset2} alt="" className='w-[45px] h-[45px] rounded-full' />
                                        <div className='ms-4'>
                                            <h6 className='text-base font-semibold text-[#FE5D37] mb-1'>Jhon Doe</h6>
                                            <small className='text-[#74787C]'>CEO & Founder</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='max-w-[100%] w-full lg:w-[50%] mt-12 lg:px-6'>
                            <div className='grid'>
                                <div className='col-span-12 px-3'>
                                    <img src={asset3} alt="" className='w-full md:w-[75%] mx-auto rounded-full p-4 bg-[#FFF5F3] hover:bg-[#FE5D37] transition-all duration-500' />
                                </div>
                                <div className='col-span-6 -mt-[100px] md:-mt-[150px] px-1 md:px-3'>
                                    <img src={asset4} alt="" className='w-full rounded-full p-4 bg-[#FFF5F3] hover:bg-[#FE5D37] transition-all duration-500' />
                                </div>
                                <div className='col-span-6 -mt-[100px] md:-mt-[150px] px-1 md:px-3'>
                                    <img src={asset5} alt="" className='w-full rounded-full p-4 bg-[#FFF5F3] hover:bg-[#FE5D37] transition-all duration-500' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
