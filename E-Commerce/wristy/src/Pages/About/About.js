import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

import Faqs from '../../Component/Faqs/Faqs'

// assets
import asset86 from '../../Assets/asset 86.jpg'
import asset87 from '../../Assets/asset 87.jpg'
import asset88 from '../../Assets/asset 88.jpg'
import asset89 from '../../Assets/asset 89.jpg'
import asset90 from '../../Assets/asset 90.png'
import asset91 from '../../Assets/asset91.jpg'
import asset92 from '../../Assets/asset92.jpg'
import asset93 from '../../Assets/asset93.jpg'
import asset94 from '../../Assets/asset94.jpg'
import asset95 from '../../Assets/asset95.jpg'
import asset96 from '../../Assets/asset96.svg'
import asset97 from '../../Assets/asset97.svg'
import asset98 from '../../Assets/asset98.svg'
import asset99 from '../../Assets/asset99.svg'

import { useEffect } from 'react';

// css link
import './about.css'

function About() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div>
            <div className='about container mx-auto px-10'>
                <div className='page-title'>
                    <div className='blog-heading flex justify-between py-14'>
                        <div>
                            <p className='sub-title text-xs'>ABOUT</p>
                            <h2 className='section-heading text-5xl'>Our Story</h2>
                        </div>
                    </div>
                </div>
            </div>
            <section className='our-story'>
                <div className='about-data border-b mb-28 container mx-auto'>
                    <div className='story-wrap flex items-center gap-7 mb-6'>
                        <div className='story-img overflow-hidden' data-aos="fade-down" data-aos-duration="1000">
                            <img src={asset86} alt="" className='' />
                        </div>
                        <div className='story-main-img overflow-hidden' data-aos="fade-up" data-aos-duration="1000">
                            <img src={asset87} alt="" className='' />
                        </div>
                    </div>
                    <div className='about-wrap container mx-auto px-10 mb-3 flex justify-between flex-wrap'>
                        <div className='story-left w-[100%] max-w-[30%]'>
                            <p className='about-text mb-10 text-stone-700'>We strive to provide exceptional customer service, ensuring that your shopping experience with us is nothing short of extraordinary.</p>
                            <div className='story-info flex flex-row items-end'>
                                <h2 className='text-4xl font-semibold text-stone-800'>12</h2>
                                <p className='text-sm text-stone-700 ml-3'>Years of Experience</p>
                            </div>
                        </div>
                        <div className='story-right w-[100%] max-w-[46%]'>
                            <p className='story-text mb-10 text-stone-700'>With years of experience in the watch industry, our team is dedicated to curating a meticulously selected collection of watches from renowned brands and emerging designers alike.</p>
                            {/* <marquee behavior="" direction="" className="text-stone-600">Luxury &nbsp; * &nbsp; Exclusivity &nbsp; * &nbsp; Precision &nbsp; * &nbsp; Watches &nbsp; * &nbsp; Luxury &nbsp; * &nbsp; Timekeeping</marquee> */}
                            {/* <div className='about-right'>
                                <div className='linear'></div>
                                <div className='linear right'></div>
                                <div className='story-btm'>
                                    <p>Luxury</p>
                                    <img src={asset100} alt="" />
                                    <p>Timekeeping</p>
                                    <img src={asset100} alt="" />
                                    <p>Exclusivity</p>
                                    <img src={asset100} alt="" />
                                    <p>Precision</p>
                                    <img src={asset100} alt="" />
                                    <p>Watches</p>
                                    <img src={asset100} alt="" />
                                    <p>Luxury</p>
                                    <img src={asset100} alt="" />
                                    <p>Timekeeping</p>
                                    <img src={asset100} alt="" />
                                    <p>Exclusivity</p>
                                    <img src={asset100} alt="" />
                                    <p>Precision</p>
                                    <img src={asset100} alt="" />
                                    <p>Watches</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className='our-mission container mx-auto px-10 mb-28 overflow-hidden'>
                <div className='section-wrap grid lg:grid-cols-2 gap-10 items-center'>
                    <div className='section-data'>
                        <h2 className='sub-heading text-3xl mb-3'>Our Mission</h2>
                        <p className='single-text text-stone-700'>Our mission is to redefine the way people perceive and experience timekeeping. We are committed to offering an unparalleled selection of exquisite timepieces that not only tell time but also tell stories.</p>
                        <div className='button-wrap mt-7'>
                            <button className='border border-black text-sm px-5 py-3 hover:bg-black hover:text-white'>Contact us</button>
                        </div>
                    </div>
                    <div className='section-img' data-aos="fade-left" data-aos-duration="1000">
                        <img src={asset88} alt="" />
                    </div>
                </div>
            </section>
            <section className='our-vision container mx-auto px-10 mb-28 overflow-hidden'>
                <div className='section-wrap grid lg:grid-cols-2 gap-10 items-center '>
                    <div className='section-img' data-aos="fade-right" data-aos-duration="1000">
                        <img src={asset89} alt="" />
                    </div>
                    <div className='section-data'>
                        <h2 className='sub-heading text-3xl mb-3'>Our Vision</h2>
                        <p className='single-text mb-3 text-stone-700'>Our vision is to inspire passion, creativity, and self-expression through the world of horology, enriching the lives of our customers one watch at a time.</p>
                        <p className='single-text text-stone-700'>We envision a future where every individual can find their perfect watch, regardless of style or budget, and where the experience of shopping for a timepiece is as memorable as wearing it.</p>
                        <div className='button-wrap mt-7'>
                            <button className='border border-black text-sm px-5 py-3 hover:bg-black hover:text-white'>View Collection</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='innovation bg-black mb-28'>
                <div className='invocation-co container mx-auto px-10'>
                    <div className='innovation-wrap'>
                        <div className='innovation-block'>
                            <p className='innovation-number text-stone-400 text-sm'>01.</p>
                            <h5 className='innovation-title text-white mb-2'>Smartwatch Integration</h5>
                            <p className='innovation-text text-stone-400 text-sm'>
                                One of the most exciting areas of innovation is the integration of smartwatch technology into traditional timepieces. By incorporating features such as fitness tracking.
                            </p>
                        </div>
                        <img src={asset90} alt="" className='innovation-img' id='w-node-_05d2e6a2-6e02-61c1-b99a-25851be3e062-61ac2c0c' data-aos="fade-up" data-aos-duration="1000" />
                        <div className='innovation-block'>
                            <p className='innovation-number text-stone-400 text-sm'>02.</p>
                            <h5 className='innovation-title text-white mb-2'>Sustainable Materials</h5>
                            <p className='innovation-text text-stone-400 text-sm'>
                                From eco-friendly materials to ethical sourcing practices, we strive to minimize our environmental footprint while creating watches that stand the test of time.
                            </p>
                        </div>
                        <div className='innovation-block'>
                            <p className='innovation-number text-stone-400 text-sm'>03.</p>
                            <h5 className='innovation-title text-white mb-2'>Customization Options</h5>
                            <p className='innovation-text text-stone-400 text-sm'>
                                Discussing innovative customization options, such as interchangeable straps & personalized engravings, that allow customers to create unique timepieces.
                            </p>
                        </div>
                        <div className='innovation-block'>
                            <p className='innovation-number text-stone-400 text-sm'>04.</p>
                            <h5 className='innovation-title text-white mb-2'>Advanced Movement Technology</h5>
                            <p className='innovation-text text-stone-400 text-sm'>
                                Advancements in movement technology, such as high-frequency movements and innovative escapements, that enhance accuracy and performance in watches.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='empowerment container mx-auto px-10 mb-32'>
                <div className='section-wrap grid lg:grid-cols-2 gap-10'>
                    <div className='empowerment-data flex flex-col justify-between'>
                        <div className='py-2'>
                            <h2 className='sub-heading text-3xl mb-4'>Our Empowerment</h2>
                            <p className='body-small text-sm text-stone-600 mb-3'>We strive to create a work environment where every individual feels valued, respected, and empowered to reach their full potential. We invest in ongoing training & development opportunities to help our team members grow both personally and professionally, fostering a culture of innovation, collaboration, and excellence.</p>
                            <p className='empowerment-text text-sm text-stone-600'>Through our curated collection, educational resources, and engaging events, we aim to empower our customers to explore their passion for watches & discover the joy of collecting and wearing timepieces that resonate with them on a personal level.</p>
                            <div className='button-wrap mt-7'>
                                <button className='border border-black text-xs px-5 py-3 hover:bg-black hover:text-white'>Explore Products</button>
                            </div>
                        </div>
                        <div className='empowerment-btm'>
                            <p className='text-lg text-stone-700'>Sold Worldwide Watches</p>
                            <h2 className='empowerment-info text-5xl'>85,000+</h2>
                        </div>
                    </div>
                    <div className='empowerment-img'>
                        <img src={asset91} alt="" />
                    </div>
                </div>
            </section>
            <section className='team'>
                <div className='team-co container mx-auto px-10 mb-28'>
                    <div className='section-title mb-6'>
                        <p className='sub-title text-xs'>MEMBERS</p>
                        <h2 className='section-heading text-3xl'>Meet Our Team</h2>
                    </div>
                    <div className='team-wrap grid grid-cols-2 lg:grid-cols-4 gap-5'>
                        <div className='team-block'>
                            <div className='team-img mb-2'>
                                <img src={asset92} alt="" />
                            </div>
                            <div className='team-data'>
                                <p className='text-sm text-stone-700'>Founder & CEO</p>
                                <h2>Esther Howard</h2>
                            </div>
                        </div>
                        <div className='team-block'>
                            <div className='team-img mb-2'>
                                <img src={asset93} alt="" />
                            </div>
                            <div className='team-data'>
                                <p className='text-sm text-stone-700'>Marketing Manager</p>
                                <h2>Wade Warren</h2>
                            </div>
                        </div>
                        <div className='team-block'>
                            <div className='team-img mb-2'>
                                <img src={asset94} alt="" />
                            </div>
                            <div className='team-data'>
                                <p className='text-sm text-stone-700'>Operations Manager</p>
                                <h2>Leslie Alexander</h2>
                            </div>
                        </div>
                        <div className='team-block'>
                            <div className='team-img mb-2'>
                                <img src={asset95} alt="" />
                            </div>
                            <div className='team-data'>
                                <p className='text-sm text-stone-700'>Product Manager</p>
                                <h2>Ronald Richards</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='features'>
                <div className='feature-co container mx-auto px-10 mb-20'>
                    <div className='features-wrap grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                        <div className='features-block'>
                            <img src={asset96} alt="" className='' />
                            <div className='features-data mt-3'>
                                <h2 className='features-title text-lg mb-2'>Free Shipping</h2>
                                <p className='features-text text-sm'>Enjoy the convenience of complimentary shipping on all orders.</p>
                            </div>
                        </div>
                        <div className='features-block'>
                            <img src={asset97} alt="" />
                            <div className='features-data mt-3'>
                                <h2 className='features-title text-lg mb-2'>Easy Returns</h2>
                                <p className='features-text text-sm'>Experience peace of mind with our hassle-free return policy.</p>
                            </div>
                        </div>
                        <div className='features-block'>
                            <img src={asset98} alt="" />
                            <div className='features-data mt-3'>
                                <h2 className='features-title text-lg mb-2'>Fast Delivery</h2>
                                <p className='features-text text-sm'>Get your hands on your coveted timepiece quickly with our fast delivery service.</p>
                            </div>
                        </div>
                        <div className='features-block'>
                            <img src={asset99} alt="" />
                            <div className='features-data mt-3'>
                                <h2 className='features-title text-lg mb-2'>24 Hours Service</h2>
                                <p className='features-text text-sm'>Experience unparalleled support with our 24-hour service guarantee.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <Faqs/>
            </div>
        </div>
    )
}

export default About
