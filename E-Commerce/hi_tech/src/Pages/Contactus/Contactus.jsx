// import React from 'react'

// css 
import './contactus.css'

import Features from '../../Component/Features/Features'

// assets
import asset96 from '../../assets/asset 96.jpeg'
import asset16 from '../../assets/asset 16.svg'
import asset104 from '../../assets/asset 104.svg'
import asset105 from '../../assets/asset 105.svg'
import asset106 from '../../assets/asset 106.svg'
import asset107 from '../../assets/asset 107.svg'
import asset97 from '../../assets/asset 97.jpeg'
import Accordion from '../../Component/Accordion/Accordion'

function Contactus() {

    return (
        <>
            <section className="container mx-auto px-5 md:px-10">
                <div className="py-[60px]">
                    <h1 className="text-5xl">Contact us</h1>
                </div>
                <div className="mb-[150px]">
                    <div className='grid grid-cols-2 gap-10 items-center'>
                        <div>
                            <img src={asset96} alt="" />
                        </div>
                        <div>
                            <h2 className='mb-[10px] text-4xl'>Drop a Message</h2>
                            <p className='mb-[10px] text-stone-600'>Have a question or feedback? We&apos;d love to hear from you! Simply fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                            <div className='mt-11'>
                                <form action="">
                                    <div className='grid gap-y-[60px] gap-x-[30px] mb-10'>
                                        <input
                                            type="text"
                                            name='Name'
                                            placeholder='Full Name'
                                            id='name'
                                            className='fullName text-sm placeholder:text-[#333] w-full block outline-0 border-b border-black pb-[10px] pl-7' style={{ gridArea: "span 1 / span 2 / span 1 / span 2" }}
                                        />
                                        <input
                                            type="email"
                                            name='Email'
                                            placeholder='Email address'
                                            id='email'
                                            className='email text-sm placeholder:text-[#333] w-full block outline-0 border-b border-black pb-[10px] pl-7'
                                        />
                                        <input
                                            type="tel"
                                            name='Name'
                                            placeholder='Phone number'
                                            id='phone'
                                            className='phone text-sm placeholder:text-[#333] w-full block outline-0 border-b border-black pb-[10px] pl-7'
                                        />
                                        <textarea
                                            name="message"
                                            placeholder='Message'
                                            id="message"
                                            className='message text-sm placeholder:text-[#333] w-full block outline-0 border-b border-black pb-[10px] pl-7 min-h-[120px]' style={{ gridArea: "span 1 / span 2 / span 1 / span 2" }}
                                        ></textarea>
                                    </div>
                                    <div className='flex justify-end items-center'>
                                        <button className='flex items-center text-sm border border-black rounded-full px-5 py-2 hover:bg-black hover:text-white'>Submit Now
                                            <img src={asset16} alt="" className='ml-2' />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-[150px]'>
                    <div className='grid grid-cols-2 gap-10 items-center'>
                        <div className='flex flex-col gap-y-[30px]'>
                            <div className='border-b border-black pb-[30px]'>
                                <h5 className='mb-[10px] text-lg'>Contact us</h5>
                                <div className='flex flex-col gap-y-1'>
                                    <a href="mailto:info.example@hitech.io" className='text-stone-600'>info.example@hitech.io</a>
                                    <a href="tel:(316)555-0116" className='text-stone-600'>(316) 555-0116</a>
                                </div>
                            </div>
                            <div className='border-b border-black pb-[30px]'>
                                <h5 className='mb-[10px] text-lg'>Address</h5>
                                <p className='text-stone-600'>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <a href="" className='flex items-center gap-x-[10px] text-sm text-stone-700'>
                                    <div className='min-w-[34px] max-w-[34px] min-h-[34px] max-h-[34px] border rounded-full flex justify-center items-center'>
                                        <img src={asset104} alt="" className='' />
                                    </div>
                                    Twitter
                                </a>
                                <a href="" className='flex items-center gap-x-[10px] text-sm text-stone-700'>
                                    <div className='min-w-[34px] max-w-[34px] min-h-[34px] max-h-[34px] border rounded-full flex justify-center items-center'>
                                        <img src={asset105} alt="" className='' />
                                    </div>
                                    Facebook
                                </a>
                                <a href="" className='flex items-center gap-x-[10px] text-sm text-stone-700'>
                                    <div className='min-w-[34px] max-w-[34px] min-h-[34px] max-h-[34px] border rounded-full flex justify-center items-center'>
                                        <img src={asset106} alt="" className='' />
                                    </div>
                                    You Tube
                                </a>
                                <a href="" className='flex items-center gap-x-[10px] text-sm text-stone-700'>
                                    <div className='min-w-[34px] max-w-[34px] min-h-[34px] max-h-[34px] border rounded-full flex justify-center items-center'>
                                        <img src={asset107} alt="" className='' />
                                    </div>
                                    Instagram
                                </a>
                            </div>
                        </div>
                        <div>
                            <img src={asset97} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <Accordion />
            <Features />
        </>
    )
}

export default Contactus
