import React from 'react'

import Faqs from '../../Component/Faqs/Faqs'

// css link
import './contact.css'

// assets link
import asset71 from '../../Assets/asset 71.jpg'
import asset72 from '../../Assets/asset 72.jpg'
import Signature from '../../Component/Signature/Signature'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Contact() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div>
            <div className='contact-page container mx-auto px-10 mb-12'>
                <div className='page-title'>
                    <div className='blog-heading flex justify-between py-14'>
                        <div>
                            <p className='sub-title text-xs'>GET IN TOUCH</p>
                            <h2 className='section-heading text-4xl'>Contact us</h2>
                        </div>
                    </div>
                </div>
                <section className='contact mb-24'>
                    <div className='contact-wrap grid md:grid-cols-1 lg:grid-cols-2 gap-12'>
                        <div className='contact-img' data-aos="fade-right" data-aos-duration="1000">
                            <img src={asset71} alt="" />
                        </div>
                        <div className='contact-data flex flex-col justify-center'>
                            <div className='contact-form'>
                                <form action="">
                                    <div className="space-y-10">
                                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            <div className="sm:col-span-3">
                                                <label htmlFor="first-name" className="block text-sm leading-6 text-gray-900">
                                                    First Name
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="first-name"
                                                        id="first-name"
                                                        autoComplete="given-name"
                                                        placeholder='Enter your first name'
                                                        className="block w-full border-0 border-b border-black py-1.5 text-gray-900 placeholder:text-xs placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                                    />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-3">
                                                <label htmlFor="last-name" className="block text-sm leading-6 text-gray-900">
                                                    Last Name
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="last-name"
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        placeholder='Enter your last name'
                                                        className="block w-full border-0 border-b border-black py-1.5 text-gray-900 placeholder:text-xs placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                                    />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-3">
                                                <label htmlFor="email" className="block text-sm leading-6 text-gray-900">
                                                    Email
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        autoComplete="email"
                                                        placeholder='Enter your email'
                                                        className="block w-full border-0 border-b border-black py-1.5 text-gray-900 placeholder:text-xs placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                                    />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-3">
                                                <label htmlFor="phone" className="block text-sm leading-6 text-gray-900">
                                                    Phone
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id="phone"
                                                        name="phone"
                                                        type="phone"
                                                        autoComplete="phone"
                                                        placeholder='Enter your phone number'
                                                        className="block w-full border-0 border-b border-black py-1.5 text-gray-900 placeholder:text-xs shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                                    />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-6 w-full">
                                                <label htmlFor="phone" className="block text-sm leading-6 text-gray-900">
                                                    Message
                                                </label>
                                                <div className="mt-2">
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        type="message"
                                                        autoComplete="message"
                                                        placeholder='Enter your message here...'
                                                        className="block w-full border-0 border-b border-black py-1.5 text-gray-900 placeholder:text-xs shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='form-btm flex items-center justify-between'>
                                            <label htmlFor="" className='w-checkbox flex items-center'>
                                                <input type="checkbox" id='checkbox' name='checkbox' className='w-3 mt-1 mr-2' />
                                                <span className='checkbox-label'>
                                                    <a href="..." className='agree-link text-xs'>I agree to <span className='hover:border-b border-black'>Terms</span> & <span className='hover:border-b border-black'>Privacy policy.</span></a>
                                                </span>
                                            </label>
                                            <button className='submit-btn border border-black text-xs px-7 py-3 hover:bg-black hover:text-white'>Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='contact-info overflow-hidden'>
                    <div className='contact-info-wrap items-center grid lg:grid-cols-2 gap-12'>
                        <div className='contact-left'>
                            <p className='contact-top mb-7'>Feel free to adjust the description to include specific contact details such as email address, phone number, and physical address as needed.</p>
                            <div className='contact-left-data'>
                                <div className='contact-block grid grid-cols-2 items-center'>
                                    <div className='contact-title'>
                                        <p>Location</p>
                                    </div>
                                    <div className='contact-right'>
                                        <p className='text-sm'>4517 Washington Ave. Manchester,<br /> Kentucky 39495</p>
                                    </div>
                                </div>
                                <hr className='my-4 border-gray-400' />
                                <div className='contact-block grid grid-cols-2 items-center'>
                                    <div className='contact-title'>
                                        <p>Email</p>
                                    </div>
                                    <div className='contact-right'>
                                        <a href="..." className='text-sm hover:border-b border-black'>hello@example.io</a>
                                    </div>
                                </div>
                                <hr className='my-4 border-gray-400' />
                                <div className='contact-block grid grid-cols-2 items-center'>
                                    <div className='contact-title'>
                                        <p>Phone</p>
                                    </div>
                                    <div className='contact-right'>
                                        <a href="tel:+1(239)555-0108" className='text-sm hover:border-b border-black'>+1 (239) 555-0108</a>
                                    </div>
                                </div>
                                <hr className='my-4 border-gray-400' />
                                <div className='contact-block grid grid-cols-2 items-center'>
                                    <div className='contact-title'>
                                        <p>Follow on</p>
                                    </div>
                                    <div className='contact-right'>
                                        <div className='social-wrap'>
                                            <ul className='flex flex-wrap items-center'>
                                                <li><a href="..." className='mr-5 text-sm hover:underline'>Instagram</a></li>
                                                <li className='list-disc mr-5 text-sm'><a href="..." className='hover:underline'>Facebook</a></li>
                                                <li className='list-disc mr-5 text-sm'><a href="..." className='hover:underline'>Twitter</a></li>
                                                <li className='list-disc mr-5 text-sm'><a href="..." className='hover:underline'>YouTube</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <hr className='my-4 border-gray-400' />
                            </div>
                        </div>
                        <div className='contact-image' data-aos="fade-left" data-aos-duration="1000">
                            <img src={asset72} alt=""  />
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <Faqs />
            </div>
            <div>
                <Signature />
            </div>
        </div >
    )
}

export default Contact
