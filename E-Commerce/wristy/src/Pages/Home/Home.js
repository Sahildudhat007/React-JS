import React from 'react'
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

// assets link
import asset5 from '../../Assets/asset 5.svg'
import asset6 from '../../Assets/asset 6.jpeg'
import asset7 from '../../Assets/asset 7.png'
import asset8 from '../../Assets/asset 8.jpeg'
import asset9 from '../../Assets/asset 9.jpeg'
import asset10 from '../../Assets/asset 10.jpeg'
import asset11 from '../../Assets/asset 11.jpeg'
import asset103 from '../../Assets/asset103.jpg'
import asset104 from '../../Assets/asset104.jpg'
import asset105 from '../../Assets/asset105.jpg'
import asset106 from '../../Assets/asset106.jpg'
import asset107 from '../../Assets/asset107.jpg'
import asset108 from '../../Assets/asset108.jpg'
import asset30 from '../../Assets/asset 30.jpeg'
import asset31 from '../../Assets/asset 31.jpeg'
import asset32 from '../../Assets/asset 32.jpeg'

// react icon
import { HiArrowLongRight } from "react-icons/hi2";

import CommonProduct from './CommonProduct';
import CommonData from '../../Component/CommonData/CommonData'
import Signature from '../../Component/Signature/Signature'

// css link
import './home.css'

import { useRef, useState, useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Home() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div>
            {/* <section className='header bg-black border-b'>
                <div className='navbar container mx-auto px-10 py-6 border-stone-600'>
                    <div className='w-layout-blockcontainer container w-container'>
                        <div className='navbar-wrap flex items-center justify-between'>
                            <Link to="/">
                                <img src={asset101} alt="" />
                            </Link>
                            <div className='nav-menu-wrap'>
                                <nav className='nav-menu bg w-nav-menu'>
                                    <ul className='flex'>
                                        <li className='mx-3'>
                                            <Link to="about" className='text-stone-200 text-sm'>About</Link>
                                        </li>
                                        <li className='mx-3'>
                                            <Link to="categories" className='text-stone-200 text-sm'>Categories</Link>
                                        </li>
                                        <li className='mx-3'>
                                            <Link to="shop" className='text-stone-200 text-sm'>Shop</Link>
                                        </li>
                                        <li className='mx-3'>
                                            <Link to="blogs" className='text-stone-200 text-sm'>Blogs</Link>
                                        </li>
                                        <li className='mx-3'>
                                            <Link to="reviews" className='text-stone-200 text-sm'>Reviews</Link>
                                        </li>
                                        <li className='mx-3'>
                                            <Link to="contact" className='text-stone-200 text-sm'>Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className='nav-right flex items-center'>
                                <a href="#" className='search'>
                                    <img src={asset2} alt="" />
                                </a>
                                <a href="#" className='user mx-3'>
                                    <img src={asset3} alt="" />
                                </a>
                                <a href="#" className='flex items-center text-stone-300'>
                                    <img src={asset4} alt="" />
                                    cart (0)
                                </a>
                                <a href="#" className='menu-bar ml-4'>
                                    <RxHamburgerMenu className='text-white text-2xl' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <div className='hero-wrapper bg-black mb-28'>
                <div className='w-container container mx-auto px-10'>
                    <div className='hero-wrap'>
                        <div className='hero-data'>
                            <div>
                                <h1 className='hero-title text-5xl mb-5 font-semibold text-white'>Fashionable watches for every occasion</h1>
                                <p className='hero-text text-white w-[100%] max-w-[80%]'>Elevate your style with our curated collection of essential watches for every wardrobe. From classic timepieces that exude sophistication to modern designs that make a statement.</p>
                                <div className='hero-btn-wrap'>
                                    <button className='hero-btn text-white text-sm border border-white py-3 px-4 hover:bg-white hover:text-black'>View Collection</button>
                                </div>
                            </div>
                            <div className='hero-btm flex justify-between items-center'>
                                <a href="#" className='hero-link'>
                                    Scroll to Explore
                                    <img src={asset5} alt="" className='ml-2' />
                                </a>
                                <div className='hero-img'>
                                    <img src={asset6} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hero-right'>
                        <img src={asset7} alt="" className='hero-watch' data-aos="zoom-in" />
                        <div className='collection-list-wrapper'>
                            <div className='hero-tag-wrap'>
                                <div className='categories-item w-dyn-item'>
                                    <button className='hero-tag text-white text-sm border border-stone-400 px-4 py-2 rounded-full'>Chronograph Watches</button>
                                </div>
                                <div className='categories-item w-dyn-item'>
                                    <button className='hero-tag text-white text-sm border border-stone-400 px-4 py-2 rounded-full'>Skeleton Watches</button>
                                </div>
                                <div className='categories-item w-dyn-item'>
                                    <button className='hero-tag text-white text-sm border border-stone-400 px-4 py-2 rounded-full'>Leather Watches</button>
                                </div>
                                <div className='categories-item w-dyn-item'>
                                    <button className='hero-tag text-white text-sm border border-stone-400 px-4 py-2 rounded-full'>Smart Watches</button>
                                </div>
                                <div className='categories-item w-dyn-item'>
                                    <button className='hero-tag text-white text-sm border border-stone-400 px-4 py-2 rounded-full'>Women's Watch</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='featured-products mb-28'>
                <div className='f-container container mx-auto px-10'>
                    <div className='section-title mb-4'>
                        <p className='sub-title text-xs'>SHOWCASE</p>
                        <h2 className='section-heading text-3xl'>Featured Watches</h2>
                    </div>
                    <div className='w-dyn-list mx-auto grid grid-cols-2 md:grid-cols-3 gap-7'>
                        <div className='fp-list'>
                            <div className='product-item '>
                                <a href="#" className='fp-block'>
                                    <img src={asset8} alt="" className='fp-image' />
                                </a>
                                <div className='fp-data text-center pb-5'>
                                    <p className='fp-title'>Royal Crest Sovereign Signature</p>
                                    <p className='fp-price-wrap text-sm text-stone-600'>$ 320.00 USD</p>
                                </div>
                            </div>
                        </div>
                        <div className='fp-list'>
                            <div className='product-item'>
                                <a href="#" className='fp-block'>
                                    <img src={asset9} alt="" className='fp-image' />
                                </a>
                                <div className='fp-data text-center pb-5'>
                                    <p className='fp-title'>Timeless Tradition Classic Legacy</p>
                                    <p className='fp-price-wrap text-sm text-stone-600'>$ 470.00 USD</p>
                                </div>
                            </div>
                        </div>
                        <div className='fp-list'>
                            <div className='product-item'>
                                <a href="#" className='fp-block'>
                                    <img src={asset10} alt="" className='fp-image' />
                                </a>
                                <div className='fp-data text-center pb-5'>
                                    <p className='fp-title'>Celestial Majesty Timekeeper Elite</p>
                                    <p className='fp-price-wrap text-sm text-stone-600'>$ 395.00 USD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='appraisal bg-black py-16 mb-20 overflow-hidden'>
                <div className='a-container container mx-auto px-10'>
                    <div className='appraisal-wrap grid md:grid-cols-1 lg:grid-cols-2 gap-5'>
                        <div className='appraisal-left'>
                            <div>
                                <h2 className='appraisal-title text-3xl text-white mb-4'>Luxury Watch Appraisal</h2>
                                <p className='appraisal-text text-stone-300'>Whether you're seeking a statement piece for a special occasion of an everyday watch that reflects your unique personality, our styling sessions offer tailored guidance and recommendations.</p>
                            </div>
                            <div className='appraisal-data'>

                            </div>
                        </div>
                        <div className='appraisal-img' data-aos="zoom-in">
                            <img src={asset11} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='shop mb-20'>
                <div className='w-layout-blockcontainer container mx-auto px-10'>
                    <div className='blog-heading flex justify-between py-14'>
                        <div>
                            <p className='sub-title text-xs'>WRISTY TRENDS</p>
                            <h2 className='section-heading text-3xl'>Latest Products</h2>
                        </div>
                        <div className='blog-btn mt-8'>
                            <a href="#" className='flex items-center text-xs'>View All <HiArrowLongRight className='text-lg ml-1' /></a>
                        </div>
                    </div>
                    <div className='w-dyn-list'>
                        <div className='post-list grid md:grid-cols-3 lg:grid-cols-4 gap-6'>
                            {CommonData.productData1.map((shop) => {
                                const { id, img, product, rate } = shop
                                return (
                                    <CommonProduct key={id} img={img} product={product} rate={rate} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <section className='banner-section mb-20'>
                <div className='b-container container mx-auto px-10'>
                    <div className='banner-wrap'>
                        <a href="#" className='banner-left relative w-[100%] max-w-[35%]'>
                            <img src={asset103} alt="" className='banner-img' />
                            <div className='banner-data absolute top-5 px-5'>
                                <p className='banner-sub-title text-white text-sm'>Luxury watch</p>
                                <h2 className='banner-title text-white text-xl font-semibold'>Where Style Meets Substance.</h2>
                            </div>
                            <div className='banner-link absolute bottom-5 px-5'>
                                <p className='text-white text-sm flex items-center'>Explore Collection <HiArrowLongRight className='text-lg mt-1 ml-1' /></p>
                            </div>
                        </a>
                        <a href="#" className='banner-right relative'>
                            <img src={asset104} alt="" className='banner-img' />
                            <div className='banner-data absolute top-5 px-5'>
                                <p className='banner-sub-title text-white text-sm'>Wear professional</p>
                                <h2 className='banner-title text-white text-xl font-semibold'>Fashion Meets Function In Every Tick.</h2>
                            </div>
                            <div className='banner-link absolute bottom-5 px-5'>
                                <p className='text-white text-sm flex items-center'>Shop Watches <HiArrowLongRight className='text-lg mt-1 ml-1' /></p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            <section className='review mb-20'>
                <div className='r-container container mx-auto px-10'>
                    <div className="section-title mb-5">
                        <p className='text-xs'>TESTIMONIALS</p>
                        <h2 className='text-3xl'>Customer Reviews</h2>
                    </div>
                    <div className='review-slider'>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='testimonial-wrap grid grid-cols-1 lg:grid-cols-2 gap-5'>
                                    <div className='testimonial-img'>
                                        <img src={asset105} alt="" />
                                    </div>
                                    <div className='testimonial-data flex flex-col justify-between border border-stone-300 p-6'>
                                        <p className='testimonial-text  text-stone-700'>I recently purchased the Vanguard Voyager from Wristy, and I must say, it has exceeded all my expectations. The attention to detail in the design is remarkable, and the quality of craftsmanship is evident from the moment you hold it in your hand. Not only does it look stunning on the wrist, but it also performs flawlessly.</p>
                                        <div className=''>
                                            <h2 className=''>Darlene Robertson</h2>
                                            <p className='text-xs'>Texas, USA</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='testimonial-wrap grid grid-cols-1 lg:grid-cols-2 gap-5'>
                                    <div className='testimonial-img'>
                                        <img src={asset106} alt="" />
                                    </div>
                                    <div className='testimonial-data flex flex-col justify-between border border-stone-300 p-6'>
                                        <p className='testimonial-text  text-stone-700'>I bought a watch as a gift for my husband, and he absolutely loves it! The quality is exceptional, and it looks even better in person. It's become his go-to watch for both casual and formal occasions.</p>
                                        <div className=''>
                                            <h2 className=''>Kristin Watson</h2>
                                            <p className='text-xs'>Dallas, USA</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='testimonial-wrap grid grid-cols-1 lg:grid-cols-2 gap-5'>
                                    <div className='testimonial-img'>
                                        <img src={asset107} alt="" />
                                    </div>
                                    <div className='testimonial-data flex flex-col justify-between border border-stone-300 p-6'>
                                        <p className='testimonial-text  text-stone-700'>Exceptional service from start to finish! I reached out to the customer support team with a few questions about a particular watch, and they were incredibly helpful and knowledgeable.</p>
                                        <div className=''>
                                            <h2 className=''>Theresa Webb</h2>
                                            <p className='text-xs'>Florida, USA</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='testimonial-wrap grid grid-cols-1 lg:grid-cols-2 gap-5'>
                                    <div className='testimonial-img'>
                                        <img src={asset108} alt="" />
                                    </div>
                                    <div className='testimonial-data flex flex-col justify-between border border-stone-300 p-6'>
                                        <p className='testimonial-text  text-stone-700'>I've been a watch collector for many years, and I can confidently say that the Heritage Horizon from Wristy is one of the finest additions to my collection. The design is a perfect blend of vintage charm and modern sophistication, with a beautifully crafted dial and elegant case.</p>
                                        <div className=''>
                                            <h2 className=''>Devon Lane</h2>
                                            <p className='text-xs'>New York, USA</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
            <section className='blogs mb-28'>
                <div className='b-container container mx-auto px-10'>
                    <div className='blog-heading flex items-end justify-between mb-8'>
                        <div>
                            <p className='sub-title text-xs'>BLOGS</p>
                            <h2 className='section-heading text-3xl'>News & Articles</h2>
                        </div>
                        <div className='blog-btn'>
                            <a href="#" className='flex items-center text-xs'>View All <HiArrowLongRight className='text-lg ml-2' /></a>
                        </div>
                    </div>
                    <div className='w-dyn-list grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <a href="#" className='post-block'>
                            <div className='post-img'>
                                <img src={asset30} alt="" className='post-image' />
                            </div>
                            <div className='post-btm mt-3'>
                                <p className='post-tag mb-2 text-xs'>Timepieces</p>
                                <div className='post-data'>
                                    <h4 className='post-title mb-4 text-lg'>The evolution of time a journey through watchmaking history</h4>
                                    <p className='post-author text-xs'>Written by: Leslie Alexander</p>
                                </div>
                            </div>
                        </a>
                        <a href="#" className='post-block'>
                            <div className='post-img'>
                                <img src={asset31} alt="" className='post-image' />
                            </div>
                            <div className='post-btm mt-3'>
                                <p className='post-tag mb-2 text-xs'>Watches</p>
                                <div className='post-data'>
                                    <h4 className='post-title mb-4 text-lg'>The future of timekeeping innovations and trends in the watch industry</h4>
                                    <p className='post-author text-xs'>Written by: Jacob Jones</p>
                                </div>
                            </div>
                        </a>
                        <a href="#" className='post-block'>
                            <div className='post-img'>
                                <img src={asset32} alt="" className='post-image' />
                            </div>
                            <div className='post-btm mt-3'>
                                <p className='post-tag mb-2 text-xs'>Vintage</p>
                                <div className='post-data'>
                                    <h4 className='post-title mb-4 text-lg'>From day to night transitioning your watch for different occasions</h4>
                                    <p className='post-author text-xs'>Written by: Jenny Willison</p>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
            </section>
            <div>
                <Signature />
            </div>
        </div>
    )
}

export default Home
