// import React from 'react'

// assets
import asset22 from '../../assets/asset 22.png'
import asset23 from '../../assets/asset 23.png'
import asset24 from '../../assets/asset 24.png'
import asset16 from '../../assets/asset 16.svg'

function Banner() {
    return (
        <>
            <section className="container mx-auto px-5 md:px-10 mb-16 mb:mb-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="bg-[#cce3e8] py-14 px-6 flex justify-between align-middle items-center rounded-md">
                    <div className='w-[100%] max-w-[50%] space-y-7'>
                        <div>
                            <p className='mb-1 underline text-sm'>18% discount</p>
                            <h3 className='text-[22px]'>Smartphones & Accessories</h3>
                        </div>
                        <a href="/" className='flex items-center text-sm'>
                            Shop Now
                            <img src={asset16} alt="" className='ml-2' />
                        </a>
                    </div>
                    <img src={asset22} alt="" className='max-h-[180px] md:max-h-[210px]' />
                </div>
                <div className="bg-[#edd5cb] py-14 px-6 flex justify-between align-middle items-center rounded-md">
                    <div className='w-[100%] max-w-[50%] space-y-7'>
                        <div>
                            <p className='mb-1 underline text-sm'>New arrival</p>
                            <h3 className='text-[22px]'>Portable Bluetooth Speaker</h3>
                        </div>
                        <a href="/" className='flex items-center text-sm'>
                            Shop Now
                            <img src={asset16} alt="" className='ml-2' />
                        </a>
                    </div>
                    <img src={asset23} alt="" className='max-h-[150px] md:max-h-[200px]' />
                </div>
                <div className="bg-[#cbeddb] py-14 px-6 flex justify-between align-middle items-center rounded-md">
                    <div className='w-[100%] max-w-[50%] space-y-7'>
                        <div>
                            <p className='mb-1 underline text-sm'>12th generation</p>
                            <h3 className='text-[22px]'>StellarView Notebook</h3>
                        </div>
                        <a href="/" className='flex items-center text-sm'>
                            Shop Now
                            <img src={asset16} alt="" className='ml-2' />
                        </a>
                    </div>
                    <img src={asset24} alt="" className='max-h-[150px] md:max-h-[190px]' />
                </div>
            </section>
        </>
    )
}

export default Banner
