import React from 'react'

// assets
import asset1 from '../../assets/asset 1.svg'

function Footer() {
    return (
        <React.Fragment>
            <section id='footer' className='container mx-auto px-10 py-20 bg-zinc-800'>
                <div className='grid md:grid-cols-1 lg:grid-cols-4'>
                    <div className='mr-12 md:mb-6'>
                        <div className='mb-5'>
                            <img src={asset1} alt="" className='w-[140px] h-[30px]' />
                        </div>
                        <div>
                            <p className='text-base mb-2 text-zinc-300 leading-[30px]'>Spyro is a modern business theme, that lets you build stunning high performance websites using a fully visual interface. Start with any of the demos below.</p>
                        </div>
                    </div>
                    <div className='lg:mr-16 lg:pl-7 md:mb-6'>
                        <div className='mb-5'>
                            <p className='text-xl text-white'>Navigation</p>
                        </div>
                        <div className='grid grid-cols-2'>
                            <p className='flex flex-col text-zinc-300 space-y-2'>
                                <a href="...">Home</a>
                                <a href="...">About</a>
                                <a href="...">Testimonials</a>
                            </p>
                            <p className='flex flex-col text-zinc-300 space-y-2 ml-5'>
                                <a href="...">Team</a>
                                <a href="...">FAQS</a>
                                <a href="...">Contact</a>
                            </p>
                        </div>
                    </div>
                    <div className='mr-16 lg:pl-7 md:mb-7'>
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
            </section>
        </React.Fragment>
    )
}

export default Footer
