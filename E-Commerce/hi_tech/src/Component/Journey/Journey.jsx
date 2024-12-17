// import React from 'react'

// assets
import asset82 from '../../assets/asset 82.svg'
import asset83 from '../../assets/asset 83.svg'
import asset84 from '../../assets/asset 84.jpeg'
import asset85 from '../../assets/asset 85.jpeg'
import asset86 from '../../assets/asset 86.svg'
import asset87 from '../../assets/asset 87.svg'

function Journey() {
    return (
        <>
            <section className="container mx-auto mb-[80px] md:mb-[150px]">
                <div className="grid grid-cols-1">
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                            <div className="bg-[#cce3e8] px-10 py-[60px] flex flex-col gap-y-[60px] items-start justify-start ">
                                <img src={asset82} alt="" />
                                <div className=''>
                                    <h4 className='mb-5 text-[22px]'>Our Vision</h4>
                                    <p className='text-sm text-stone-700'>We strive to be pioneers in our field, leading the way with groundbreaking solutions that transform lives and shape the future. Through relentless dedication to excellence, creativity, and sustainability.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                            <div className="bg-[#edd5cb] px-10 py-[60px] flex flex-col gap-y-[60px] items-start justify-start">
                                <img src={asset83} alt="" />
                                <div>
                                    <h4 className='mb-5 text-[22px]'>Our Mission</h4>
                                    <p className='text-sm text-stone-700'>We are committed to providing exceptional products, services, and support that enhance the lives of our customers and contribute to their success. With a focus on customer satisfaction and integrity.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <img src={asset84} alt="" className='object-cover w-full h-full align-middle max-w-full' />
                        </div>
                    </div>
                    <div className='grid grid-cols-12'>
                        <div className='hidden lg:block lg:col-span-6'>
                            <img src={asset85} alt="" className='object-cover w-full h-full align-middle max-w-full' />
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                            <div className="bg-[#edd5cb] px-10 py-[60px] flex flex-col gap-y-[60px] items-start justify-start">
                                <img src={asset86} alt="" />
                                <div>
                                    <h4 className='mb-5 text-[22px]'>Our Innovation</h4>
                                    <p className='text-sm text-stone-700'>Our commitment to innovation drives us to explore new ideas, embrace emerging technologies, and challenge conventional thinking. By fostering a culture of creativity, collaboration & experimentation.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                            <div className="bg-[#cce3e8] px-10 py-[60px] flex flex-col gap-y-[60px] items-start justify-start">
                                <img src={asset87} alt="" />
                                <div>
                                    <h4 className='mb-5 text-[22px]'>Our Impowerment</h4>
                                    <p className='text-sm text-stone-700'>Our mission is to empower individuals, businesses, and communities through technology, education, and opportunity. We are committed to providing the tools, resources, and support.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Journey
