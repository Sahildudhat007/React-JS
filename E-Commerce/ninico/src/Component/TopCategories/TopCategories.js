import React from 'react'

import '../TopCategories/topcategories.css'

import cat01 from '../Assets/cat01.svg'
import cat02 from '../Assets/cat02.svg'
import cat03 from '../Assets/cat03.svg'
import cat04 from '../Assets/cat04.svg'
import cat05 from '../Assets/cat05.svg'
import cat06 from '../Assets/cat06.svg'

const TopCategories = () => {
  return (
    <div>
        <section className='category-area mt-16'>
            <div className='container mx-auto px-5'>
                <div className='mb-2'>
                    <h1 className='text-2xl font-bold'>Top <span className='font-normal text-red-600'>Categories</span> </h1>
                </div>
                <div className='mt-10'>
                    <div class="category-area grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6 mb-10 items-center">
                        <div className="tpcategory text-center border-r-2 py-3">
                            <div className='tpcategory-icon'>
                                <img src={cat01} alt="" className='block' />
                                <div className='tpcategory-text hidden'>
                                    <p className='tpcategory text-red-600 font-semibold bg-white px-2 py-1 rounded-full shadow-xl'>20</p>
                                </div>
                            </div>
                            <div className='tpcategory-content'>
                                <p className='text-lg'>Driftwood <br /> Table Decor</p>
                            </div>
                        </div>
                        <div className="tpcategory text-center border-r-2 py-3">
                            <div className='tpcategory-icon mx-auto'>
                                <img src={cat01} alt="" className='block' />
                                <div className='tpcategory-text hidden'>
                                    <p className='tpcategory text-red-600 font-semibold bg-white px-2 py-1 rounded-full shadow-xl'>20</p>
                                </div>
                            </div>
                            <div className='tpcategory-content'>
                                <p className='text-lg'>Driftwood <br /> Table Decor</p>
                            </div>
                        </div>
                        <div className="tpcategory text-center border-r-2 py-3">
                            <div className='tpcategory-icon mx-auto'>
                                <img src={cat01} alt="" className='block' />
                                <div className='tpcategory-text hidden'>
                                    <p className='tpcategory text-red-600 font-semibold bg-white px-2 py-1 rounded-full shadow-xl'>20</p>
                                </div>
                            </div>
                            <div className='tpcategory-content'>
                                <p className='text-lg'>Driftwood <br /> Table Decor</p>
                            </div>
                        </div>
                        <div className="tpcategory text-center border-r-2 py-3">
                            <div className='tpcategory-icon mx-auto'>
                                <img src={cat01} alt="" className='block' />
                                <div className='tpcategory-text hidden'>
                                    <p className='tpcategory text-red-600 font-semibold bg-white px-2 py-1 rounded-full shadow-xl'>20</p>
                                </div>
                            </div>
                            <div className='tpcategory-content'>
                                <p className='text-lg'>Driftwood <br /> Table Decor</p>
                            </div>
                        </div>
                        <div className="tpcategory text-center border-r-2 py-3">
                            <div className='tpcategory-icon mx-auto'>
                                <img src={cat01} alt="" className='block' />
                                <div className='tpcategory-text hidden'>
                                    <p className='tpcategory text-red-600 font-semibold bg-white px-2 py-1 rounded-full shadow-xl'>20</p>
                                </div>
                            </div>
                            <div className='tpcategory-content'>
                                <p className='text-lg'>Driftwood <br /> Table Decor</p>
                            </div>
                        </div>
                        <div className="tpcategory text-center py-3">
                            <div className='tpcategory-icon mx-auto'>
                                <img src={cat01} alt="" className='block' />
                                <div className='tpcategory-text hidden'>
                                    <p className='tpcategory text-red-600 font-semibold bg-white px-2 py-1 rounded-full shadow-xl'>20</p>
                                </div>
                            </div>
                            <div className='tpcategory-content'>
                                <p className='text-lg'>Driftwood <br /> Table Decor</p>
                            </div>
                        </div>
                        {/* <div className="tpcategory text-center border-r-2 py-3">
                            <div className='tpcategory-icon flex justify-center relative'>
                                <img src={cat02} alt="" className='bg-gray-100 px-8 py-8 mb-5 overflow-visible rounded-full' />
                                <div className='absolute top-1 right-11'>
                                    <p className='tpcategory text-red-600 font-semibold bg-white px-2 py-1 rounded-full shadow-xl'>12</p>
                                </div>
                            </div>
                            <div className='tpcategory-content'>
                                <p className='text-lg'>Floor Driftwood <br /> Sculpture</p>
                            </div>
                        </div>
                        <div className="tpcategory text-center border-r-2 py-3">
                            <div className='tpcategory-icon flex justify-center relative'>
                                <img src={cat03} alt="" className='bg-gray-100 px-8 py-8 mb-5 overflow-visible rounded-full' />
                                <div className='absolute top-1 right-11'>
                                    <p className='tpcategory text-red-600 font-semibold bg-white px-2 py-1 rounded-full shadow-xl'>03</p>
                                </div>
                            </div>
                            <div className='tpcategory-content'>
                                <p className='text-lg'>Driftwood <br /> Christmas Tree</p>
                            </div>
                        </div>
                        <div className="tpcategory text-center border-r-2 py-3">
                            <div className='tpcategory-icon flex justify-center relative'>
                                <img src={cat04} alt="" className='bg-gray-100 px-8 py-8 mb-5 overflow-visible rounded-full' />
                                <div className='absolute top-1 right-11'>
                                    <p className='tpcategory text-red-600 font-semibold bg-white px-2 py-1 rounded-full shadow-xl'>09</p>
                                </div>
                            </div>
                            <div className='tpcategory-content'>
                                <p className='text-lg'>Wooden <br /> Bluetooth Speaker</p>
                            </div>
                        </div>
                        <div className="tpcategory text-center border-r-2 py-3">
                            <div className='tpcategory-icon flex justify-center relative'>
                                <img src={cat05} alt="" className='bg-gray-100 px-9 py-8 mb-5 overflow-visible rounded-full' />
                                <div className='absolute top-1 right-11'>
                                    <p className='tpcategory text-red-600 font-semibold bg-white px-2 py-1 rounded-full shadow-xl'>10</p>
                                </div>
                            </div>
                            <div className='tpcategory-content'>
                                <p className='text-lg'>Receivers <br /> Amplifiers</p>
                            </div>
                        </div>
                        <div className="tpcategory text-center py-3">
                            <div className='tpcategory-icon flex justify-center relative'>
                                <img src={cat06} alt="" className='bg-gray-100 px-8 py-8 mb-5 overflow-visible rounded-full' />
                                <div className='absolute top-1 right-11'>
                                    <p className='tpcategory text-red-600 font-semibold bg-white px-2 py-1 rounded-full shadow-xl'>05</p>
                                </div>
                            </div>
                            <div className='tpcategory-content'>
                                <p className='text-lg'>Appetizer <br /> Plate Set</p>
                            </div>
                        </div> */}
                    </div>
                    <hr className='mt-16 mb-16' />
                </div>
            </div>
        </section>
    </div>
  )
}

export default TopCategories