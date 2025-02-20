import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';

// css
import './hero.css';

function Hero() {
    return (
        <>
            <div className='container mx-auto relative mt-[72px]'>
                <div className='relative'>
                    <div className='top-img'></div>
                    <div>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            // navigation={true}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='bg-1 flex items-center'>
                                    <div className='w-full md:w-[66.66%] px-3 lg:px-6'>
                                        <h1 className='font-bold leading-[1.1] text-white mb-6 text-[30px] md:text-[30px] lg:text-[4.5rem]' style={{ fontFamily: "Lobster Two, cursive" }}>The Best Kindergarten School For Your Child</h1>
                                        <p className='text-white text-base md:text-[16px] lg:text-xl pb-2 mb-6'>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                        <div className='flex items-center'>
                                            <a href="..." className='py-[.375rem] md:py-4 px-3 md:px-12 bg-[#FE5D37] mr-4 rounded-full text-white text-base'>Learn More</a>
                                            <a href="..." className='py-[.375rem] md:py-4 px-3 md:px-12 bg-[#103741] rounded-full text-white text-base'>Our Classes</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='bg-2 flex items-center'>
                                    <div className='w-full md:w-[66.66%] px-3 lg:px-6'>
                                        <h1 className='font-bold leading-[1.1] text-white mb-6 text-[30px] md:text-[30px] lg:text-[4.5rem]' style={{ fontFamily: "Lobster Two, cursive" }}>Make A Brighter Future For Your Child</h1>
                                        <p className='text-white text-base md:text-[16px] lg:text-xl pb-2 mb-6'>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                        <div className='flex items-center'>
                                            <a href="..." className='py-[.375rem] md:py-4 px-3 md:px-12 bg-[#FE5D37] mr-4 rounded-full text-white text-base'>Learn More</a>
                                            <a href="..." className='py-[.375rem] md:py-4 px-3 md:px-12 bg-[#103741] rounded-full text-white text-base'>Our Classes</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='bottom-img'></div>
                </div>
            </div>
        </>
    )
}

export default Hero
