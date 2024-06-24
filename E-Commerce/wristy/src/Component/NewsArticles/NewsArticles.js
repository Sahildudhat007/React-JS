import React from 'react'

// react icon
import { HiArrowLongRight } from "react-icons/hi2";

// img link
import assets30 from '../../Assets/asset 30.jpeg'
import assets31 from '../../Assets/asset 31.jpeg'
import assets32 from '../../Assets/asset 32.jpeg'

// css link
import './newsarticles.css'

function NewsArticles() {
    return (
        <div>
            <section className='blogs'>
                <div className='w-layout-blockcontainer container mx-auto px-10 mb-24'>
                    <div className='blog-heading flex justify-between mb-7'>
                        <div>
                            <p className='sub-title text-xs'>BLOGS</p>
                            <h2 className='section-heading text-3xl'>News & Articles</h2>
                        </div>
                        <div className='blog-btn mt-8'>
                            <a href="#" className='flex items-center text-xs'>View All <HiArrowLongRight className='text-lg ml-1' /></a>
                        </div>
                    </div>
                    <div className='w-dyn-list'>
                        <div className='post-list grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            <div className="post max-w-sm">
                                <div className='img-box'>
                                    <a href="">
                                        <img src={assets30} alt="" className='post-img' />
                                    </a>
                                </div>
                                <div className="mt-3">
                                    <p className='mb-2'>
                                        <a href="#" className='text-xs'>Timepieces</a>
                                    </p>
                                    <p className='mb-4'>
                                        <a href="#" className='text-lg'>The evolution of time a journey through watchmaking history</a>
                                    </p>
                                    <a href="#" className='text-xs'>Written by: Leslie Alexander</a>
                                </div>
                            </div>
                            <div className="post max-w-sm">
                                <div className='img-box'>
                                    <a href="#">
                                        <img src={assets31} alt="" className='' />
                                    </a>
                                </div>
                                <div className="mt-3">
                                    <p className='mb-2'>
                                        <a href="#" className='text-xs'>Watches</a>
                                    </p>
                                    <p className='mb-4'>
                                        <a href="#" className='text-lg'>The future of timekeeping innovations and trends in the watch industry</a>
                                    </p>
                                    <a href="#" className='text-xs'>Written by: Jacob Jones</a>
                                </div>
                            </div>
                            <div className="post max-w-sm">
                                <div className='img-box'>
                                    <a href="#">
                                        <img src={assets32} alt="" className='' />
                                    </a>
                                </div>
                                <div className="mt-3">
                                    <p className='mb-2'>
                                        <a href="#" className='text-xs'>Vintage</a>
                                    </p>
                                    <p className='mb-4'>
                                        <a href="#" className='text-lg'>From day to night transitioning your watch for different occasions</a>
                                    </p>
                                    <a href="#" className='text-xs'>Written by: Jenny Willison</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NewsArticles
