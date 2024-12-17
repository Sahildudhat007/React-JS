// import React from 'react'

// assets
import asset42 from '../../assets/asset 42.png'
import asset3 from '../../assets/asset 3.svg'
import asset43 from '../../assets/asset 43.png'

function Cta() {
    return (
        <>
            <section className="container mx-auto px-5 md:px-10 mb-16 md:mb-36 pt-7">
                <div className='relative p-7 md:py-10 lg:py-[90px] md:px-[20px] bg-[#cce3e8] rounded-md'>
                    <img src={asset42} alt="" className='absolute hidden md:block md:max-h-[120px] lg:max-h-[222px] -top-8 md:left-[30px] lg:left-14' />
                    <div className='absolute md:top-[50px] md:left-[90px] lg:top-[100px] lg:left-[180px] bg-white md:min-w-[40px] md:max-w-[40px] md:min-h-[50px] md:max-h-[50px] lg:min-w-[50px] lg:max-w-[50px] min-h-[50px] max-h-[50px] flex justify-center items-center rounded-full text-sm'>
                        <p>-35%</p>
                    </div>
                    <div className='w-[100%] md:max-w-[50%] mx-auto flex flex-col lg:flex-row justify-between md:space-y-4'>
                        <div>
                            <p className='text-sm text-gray-700'>SoundStream</p>
                            <h3 className='text-xl md:text-2xl font-semibold'>HarmonyHear Headphone</h3>
                        </div>
                        <button className='bg-orange-600 text-white text-sm rounded-full flex items-center px-6 py-3 mt-5 md:mt-0'>
                            Shop Now
                            <img src={asset3} alt="" className='text-white mt-1 ml-2' />
                        </button>
                    </div>
                    <img src={asset43} alt="" className='max-h-[50px] md:max-h-[90px] lg:max-h-[180px] absolute top-0 right-5 md:right-10 lg:right-[80px]' />
                </div>
            </section>
        </>
    )
}

export default Cta
