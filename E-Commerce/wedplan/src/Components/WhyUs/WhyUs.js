import React from 'react'

// assets
import asset23 from '../../assets/asset 23.jpeg'
import asset24 from '../../assets/asset 24.svg'
import asset37 from '../../assets/asset 37.png'

import Accordions from '../Accordion/Accordions'

function WhyUs() {
    return (
        <React.Fragment>
            <section id='whyUs' className='container mx-auto px-5 md:px-10 lg:px-10 py-20 relative'>
                <div className='absolute top-0 right-0'>
                    <img src={asset37} alt="" />
                </div>
                <div className='text-center'>
                    <h2 className='text-4xl md:text-5xl leading-[70px]'>Why Choose Us?</h2>
                </div>
                <div className='mb-8 md:mt-2 md:mb-14 text-center'>
                    <p className='text-xl'>Here are top 4 reasons to choose us to plan your wedding</p>
                </div>
                <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                    <div className='relative'>
                        <a href="https://www.youtube.com/watch?v=jYodl9i-V1o" rel='noreferrer' target="_blank" className='p-4'>
                            <img src={asset23} alt="" />
                        </a>
                        <a href='https://www.youtube.com/watch?v=jYodl9i-V1o' rel='noreferrer' target="_blank" className='absolute top-[40%] left-[45%] bg-white p-4 w-[64px] h-[64px] flex justify-center text-center items-center rounded-full'>
                            <img src={asset24} alt="" className='w-[20px] h-[20px]' />
                        </a>
                    </div>
                    <div>
                        <Accordions />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default WhyUs
