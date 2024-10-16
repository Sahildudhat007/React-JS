import React from 'react'

// assets
import asset37 from '../../assets/asset 37.png'
import asset38 from '../../assets/asset 38.png'

function About() {
    return (
        <React.Fragment>
            <section id='about' className='container mx-auto px-10 pt-[55px] pb-[120px] md:px-5'>
                <div className='grid md:grid-cols-1 lg:grid-cols-2 items-center'>
                    <div className='relative'>
                        <img src={asset38} alt="" className='' />
                        <div className='flex flex-col justify-center items-center text-center w-[170px] h-[156px] border-b-2 border-teal-500 shadow-lg absolute -bottom-5 -right-5 bg-white'>
                            <div className='text-6xl mb-2'>
                                <h1 className='text-gray-600'>20<span className='text-3xl'>+</span></h1>
                            </div>
                            <div>
                                <p className='text-gray-600'>Years Experience</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] lg:ml-[85px] md:py-10 md:ml-0 md:px-5 relative'>
                        <div className='absolute top-0 right-0'>
                            <img src={asset37} alt="" className='' />
                        </div>
                        <div>
                            <h2 className='text-[45px] leading-[1.2em]'>
                                We are committed to make your wedding
                                <span className='ml-3 text-teal-500 border-b-4 border-teal-100'>memorable</span>
                            </h2>
                            <p className='pt-7 pb-9 text-xl leading-[1.6em]'>Get started swiftly & easily by importing a demo of your choice in a single click. Over 30 high quality professionally designed pre-built website concepts to choose from.</p>
                            <p className='text-base leading-[1.7em] text-gray-600'>Exponent is a modern business theme, that lets you build stunning high performance websites using a fully visual interface. Start with any of the demos below or build one on your own. Exponent is a perfect blend of spacious layouts, precise typography.</p>
                            <button className='mt-10 bg-teal-500 text-white px-8 py-3 text-base'>Our Wedding Packages</button>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default About
