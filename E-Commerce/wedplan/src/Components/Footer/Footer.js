import React from 'react'

// assets
import asset1 from '../../assets/asset 1.svg'

function Footer() {
    return (
        <React.Fragment>
            <section id='footer' className='container mx-auto px-5 md:px-10 py-20 bg-zinc-800'>
                <div className='grid md:grid-cols-1 lg:grid-cols-4'>
                    <div className='mr-12 md:mb-6'>
                        <div className='mb-5'>
                            <img src={asset1} alt="" className='w-[140px] h-[30px]' />
                        </div>
                        <div className='mb-10 md:mb-0'>
                            <p className='text-base mb-2 text-zinc-300 leading-[30px]'>Spyro is a modern business theme, that lets you build stunning high performance websites using a fully visual interface. Start with any of the demos below.</p>
                        </div>
                    </div>
                    <div className='lg:mr-16 lg:pl-7 mb-10 md:mb-6'>
                        <div className='mb-5'>
                            <p className='text-xl text-white'>Navigation</p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <p className='flex flex-col text-zinc-300 space-y-2'>
                                <a href="#home">Home</a>
                                <a href="#about">About</a>
                                <a href="#testimonials">Testimonials</a>
                            </p>
                            <p className='flex flex-col text-zinc-300 space-y-2 mt-2 md:mt-0 ml-0 md:ml-5'>
                                <a href="#team">Team</a>
                                <a href="#faq">FAQS</a>
                                <a href="#contact">Contact</a>
                            </p>
                        </div>
                    </div>
                    <div className='mr-16 lg:pl-7 mb-10 md:mb-7'>
                        <div className='mb-5'>
                            <p className='text-xl text-white'>Packages</p>
                        </div>
                        <div className='flex flex-col text-zinc-300 space-y-2'>
                            <a href="...">Upto 100 Guest</a>
                            <a href="...">Upto 200 Guest</a>
                            <a href="...">Upto 300 Guest</a>
                        </div>
                    </div>
                    <div>
                        <div className='mb-5'>
                            <p className='text-xl text-white'>Subscribe</p>
                        </div>
                        <div>
                            <form action="" className=''>
                                <input type="email" maxLength={256} name='email' placeholder='Email' className='bg-transparent border-b border-teal-600 mb-4' />
                                <input type="submit" value="Subscribe" className='bg-transparent border-b border-teal-600 text-teal-500' />
                            </form>
                        </div>
                    </div>
                </div>
                <div className='mt-12 pt-5 border-t border-neutral-600 flex flex-wrap justify-center md:justify-between'>
                    <div className='flex items-center mb-1 md:mb-0'>
                        <div>
                            <p className='text-zinc-300 text-sm mr-1'>© wedflow 2022.</p>
                        </div>
                        <a href="..." className='text-zinc-300 text-sm hover:text-teal-500 underline'>Changelog</a>
                        <a href="..." className='text-zinc-300 text-sm hover:text-teal-500 ml-1 underline'>License Info</a>
                    </div>
                    <div className='flex items-center'>
                        <p className='text-zinc-300 text-sm'>Powered by</p>
                        <a href="..." className='ml-1 text-white font-semibold'>Webflow</a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Footer
