// import React from 'react'

// assets
import asset88 from '../../assets/asset 88.jpeg'
import asset16 from '../../assets/asset 16.svg'

function Philosophy() {
    return (
        <>
            <section className="container mx-auto px-5 mb-[80px] md:mb-[150px]">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                    <div>
                        <img src={asset88} alt="" className='rounded-md' />
                    </div>
                    <div className=''>
                        <h3 className='mb-4 text-[28px]'>Exploring the philosophical foundation</h3>
                        <p className='text-stone-600'>Through introspection and reflection, we invite you to explore the profound roots of our brand&apos;s vision and purpose, illuminating the path forward with clarity and insight.</p>
                        <div className='mt-10'>
                            <a href="/" className='flex items-center space-x-3'>
                                <p className='text-sm font-semibold'>View Collection</p>
                                <img src={asset16} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Philosophy
