import React from 'react'

// asset
import asset17 from '../../assets/asset 17.jpeg'
import asset18 from '../../assets/asset 18.jpeg'
import asset19 from '../../assets/asset 19.jpeg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';

// css
import './clients.css'

function Clients() {
    return (
        <>
            <div className='container mx-auto py-12'>
                <div className='container px-3'>
                    <div className='text-center mx-auto mb-12 max-w-[600px]'>
                        <h1 className='mb-4 text-[#103741] text-[2.5rem] font-bold' style={{ fontFamily: "Lobster Two, cursive" }}>Our Clients Say!</h1>
                        <p className='mb-4 text-[#74787C]'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className='flex justify-center'>
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
                                <div className='grid grid-cols-2 justify-center'>
                                    <div className='w-[560.015px] mr-6'>
                                        <div className='rounded-[10px] bg-[#FFF5F3] p-12'>
                                            <p className='mb-4 text-[1.25rem] text-[#74787C]'>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                                            <div className='flex items-center bg-white -mr-12' style={{ borderRadius: "50px 0 0 50px" }}>
                                                <img src={asset17} alt="" className='rounded-full' style={{ width: "90px" }} />
                                                <div className='pl-4'>
                                                    <h3 className='mb-1 text-[1.75rem] font-bold text-[#103741]' style={{ fontFamily: "Lobster Two, cursive" }}>Client Name</h3>
                                                    <small className='text-[#74787C]'>Profession</small>
                                                </div>
                                                <i className='fa fa-quote-right fa-3x ms-auto text-[#FE5D37]'></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[560.015px] mr-6'>
                                        <div className='rounded-[10px] bg-[#FFF5F3] p-12'>
                                            <p className='mb-4 text-[1.25rem] text-[#74787C]'>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                                            <div className='flex items-center bg-white -mr-12' style={{ borderRadius: "50px 0 0 50px" }}>
                                                <img src={asset18} alt="" className='rounded-full' style={{ width: "90px" }} />
                                                <div className='pl-4'>
                                                    <h3 className='mb-1 text-[1.75rem] font-bold text-[#103741]' style={{ fontFamily: "Lobster Two, cursive" }}>Client Name</h3>
                                                    <small className='text-[#74787C]'>Profession</small>
                                                </div>
                                                <i className='fa fa-quote-right fa-3x ms-auto text-[#FE5D37]'></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='grid grid-cols-2'>
                                    <div className='w-[560.015px] mr-6'>
                                        <div className='rounded-[10px] bg-[#FFF5F3] p-12'>
                                            <p className='mb-4 text-[1.25rem] text-[#74787C]'>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                                            <div className='flex items-center bg-white -mr-12' style={{ borderRadius: "50px 0 0 50px" }}>
                                                <img src={asset19} alt="" className='rounded-full' style={{ width: "90px" }} />
                                                <div className='pl-4'>
                                                    <h3 className='mb-1 text-[1.75rem] font-bold text-[#103741]' style={{ fontFamily: "Lobster Two, cursive" }}>Client Name</h3>
                                                    <small className='text-[#74787C]'>Profession</small>
                                                </div>
                                                <i className='fa fa-quote-right fa-3x ms-auto text-[#FE5D37]'></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[560.015px] mr-6'>
                                        <div className='rounded-[10px] bg-[#FFF5F3] p-12'>
                                            <p className='mb-4 text-[1.25rem] text-[#74787C]'>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                                            <div className='flex items-center bg-white -mr-12' style={{ borderRadius: "50px 0 0 50px" }}>
                                                <img src={asset18} alt="" className='rounded-full' style={{ width: "90px" }} />
                                                <div className='pl-4'>
                                                    <h3 className='mb-1 text-[1.75rem] font-bold text-[#103741]' style={{ fontFamily: "Lobster Two, cursive" }}>Client Name</h3>
                                                    <small className='text-[#74787C]'>Profession</small>
                                                </div>
                                                <i className='fa fa-quote-right fa-3x ms-auto text-[#FE5D37]'></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clients
