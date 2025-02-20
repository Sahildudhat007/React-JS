import React from 'react'

// assets
import asset6 from '../../assets/asset 6.jpeg'

function CallAction() {
    return (
        <>
            <div className='container mx-auto px-3 py-12'>
                <div className='container lg:px-3'>
                    <div className='bg-[#FFF5F3] rounded-[10px]'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[100%]'>
                            <div className=''>
                                <div className=''>
                                    <img src={asset6} alt="" className='rounded-[10px] md:w-full' />
                                </div>
                            </div>
                            <div className=''>
                                <div className='h-full flex flex-col justify-center p-10 lg:p-12'>
                                    <h1 className='mb-6 font-bold text-[1.8rem] md:text-[2.5rem]' style={{ color: "#103741", fontFamily: "Lobster Two, cursive" }}>Become A Teacher</h1>
                                    <p className='mb-6 text-[#74787C]'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                    <a href="..." className='text-center inline-block rounded-[10px] text-base font-medium text-white py-4 px-12 bg-[#FE5D37]'>Get Started Now
                                        <i className='fa fa-arrow-right ms-2'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CallAction
