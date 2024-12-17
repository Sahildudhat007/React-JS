// import React from 'react'

// assets
import asset78 from '../../assets/asset 78.jpeg'
import asset16 from '../../assets/asset 16.svg'
import WhatMake from '../../Component/WhatMake/WhatMake'
import Journey from '../../Component/Journey/Journey'
import Philosophy from '../../Component/Philosophy/Philosophy'
import Newsarticles from '../../Component/Newsarticles/Newsarticles'
import Team from '../../Component/Team/Team'

function AboutUs() {
    return (
        <>
            <section className="container mx-auto px-5 md:px-10 mb-[80px] md:mb-[150px]">
                <div className="py-[60px]">
                    <h1 className="text-4xl md:text-5xl">Our Story</h1>
                </div>
                <div>
                    <div className='grid lg:grid-cols-2 gap-14 items-center'>
                        <div>
                            <img src={asset78} alt="" />
                        </div>
                        <div className='flex flex-col gap-y-[50px] lg:gap-y-[110px]'>
                            <div>
                                <h2 className='mb-4 text-4xl'>SINCE 2006</h2>
                                <p className='mb-[10px] text-gray-600'>From humble beginnings to where we are today, our commitment to innovation has remained unwavering. We&apos;ve overcome challenges, embraced opportunities, and evolved with the rapidly changing tech landscape.</p>
                                <p className='text-gray-600'>Our story is one of passion, innovation, and relentless pursuit of excellence. It all began with a shared vision to revolutionize the way people interact with technology.</p>
                                <div className='mt-10'>
                                    <button className='flex items-center border border-black rounded-full px-6 py-3'>
                                        <p className='text-sm'>Explore Categories</p>
                                        <div className='ml-1'>
                                            <img src={asset16} alt="" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-x-[50px]'>
                                <div>
                                    <h2 className='text-4xl mb-2'>14+</h2>
                                    <div>
                                        <p className='text-lg'>Stores</p>
                                        <p className='text-sm'>Discover our worldwide stores</p>
                                    </div>
                                </div>
                                <div className='w-[1px] bg-[#0003]'></div>
                                <div>
                                    <h2 className='text-4xl mb-2'>118+</h2>
                                    <div>
                                        <p className='text-lg'>Brands</p>
                                        <p className='text-sm'>Explore our trusted brands</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <WhatMake />
            <Journey />
            <Philosophy />
            <Team />
            <Newsarticles />
        </>
    )
}

export default AboutUs
