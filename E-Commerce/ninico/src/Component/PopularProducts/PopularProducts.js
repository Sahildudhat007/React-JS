import React from 'react'

import './PopularProducts.css'

import product1 from '../Assets/product1.jpg'
import product3 from '../Assets/product3.jpg'
import product5 from '../Assets/product5.jpg'
import product7 from '../Assets/product7.jpg'
import product9 from '../Assets/product9.jpg'
import product11 from '../Assets/product11.jpg'
import product13 from '../Assets/product13.jpg'
import product15 from '../Assets/product15.jpg'
import product17 from '../Assets/product17.jpg'
import product19 from '../Assets/product19.jpg'

const PopularProducts = () => {
  return (
    <div>
        <section>
            <div className='container mx-auto px-5'>
                <div className='row flex items-center justify-between'>
                    <div className='product'>
                        <h1 className='text-2xl font-bold'>Popular <span className='font-normal text-red-600'>Products</span> </h1>
                    </div>
                    <div className='nav-item'>
                        <div className='btn1'>
                            <ul className='flex'>
                                <li>
                                    <a href="#" className='active'>All</a>
                                </li>
                                <li>
                                    <a href="#">Popular</a>
                                </li>
                                <li>
                                    <a href="#">On Sale</a>
                                </li>
                                <li>
                                    <a href="#">Best Rated</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='tab-content'>
                    <div className='card-group grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 mt-7'>
                        <div className='card p-1 '>
                            <div className='card-img '>
                                <img src={product1} alt="" className='rounded-lg' />
                            </div>
                            <div className='card-body py-3'>
                                <p className='tpproduct-title mb-1 text-gray-500'>Bradley Burgess 2</p>
                                <h1 className='tpproduct-ammount'>$20.00</h1>
                            </div>
                        </div>
                        <div className='card p-1'>
                            <div className='card-img'>
                                <img src={product3} alt="" className='rounded-lg' />
                            </div>
                            <div className='card-body py-3'>
                                <p className='tpproduct-title mb-1 text-gray-500'>Allie Sharp</p>
                                <h1 className='tpproduct-ammount'>$30.00</h1>
                            </div>
                        </div>
                        <div className='card p-1'>
                            <div className='card-img'>
                                <img src={product5} alt="" className='rounded-lg' />
                            </div>
                            <div className='card-body py-3'>
                                <p className='tpproduct-title mb-1 text-gray-500'>Nathaniel Baldwin</p>
                                <h1 className='tpproduct-ammount'>$40.00</h1>
                            </div>
                        </div>
                        <div className='card p-1'>
                            <div className='card-img'>
                                <img src={product7} alt="" className='rounded-lg' />
                            </div>
                            <div className='card-body py-3'>
                                <p className='tpproduct-title mb-1 text-gray-500'>Effie Rios</p>
                                <h1 className='tpproduct-ammount'>$40.00</h1>
                            </div>
                        </div>
                        <div className='card p-1'>
                            <div className='card-img'>
                                <img src={product9} alt="" className='rounded-lg' />
                            </div>
                            <div className='card-body py-3'>
                                <p className='tpproduct-title mb-1 text-gray-500'>Carolyn Goodwin</p>
                                <h1 className='tpproduct-ammount'>$50.00</h1>
                            </div>
                        </div>
                        <div className='card p-1'>
                            <div className='card-img'>
                                <img src={product11} alt="" className='rounded-lg' />
                            </div>
                            <div className='card-body py-3'>
                                <p className='tpproduct-title mb-1 text-gray-500'>Evelyn Patton</p>
                                <h1 className='tpproduct-ammount'>$60.00</h1>
                            </div>
                        </div>
                        <div className='card p-1'>
                            <div className='card-img'>
                                <img src={product13} alt="" className='rounded-lg' />
                            </div>
                            <div className='card-body py-3'>
                                <p className='tpproduct-title mb-1 text-gray-500'>Sally Ray</p>
                                <h1 className='tpproduct-ammount'>$70.00</h1>
                            </div>
                        </div>
                        <div className='card p-1'>
                            <div className='card-img'>
                                <img src={product15} alt="" className='rounded-lg' />
                            </div>
                            <div className='card-body py-3'>
                                <p className='tpproduct-title mb-1 text-gray-500'>Ora Bowman</p>
                                <h1 className='tpproduct-ammount'>$80.00</h1>
                            </div>
                        </div>
                        <div className='card p-1'>
                            <div className='card-img'>
                                <img src={product17} alt="" className='rounded-lg' />
                            </div>
                            <div className='card-body py-3'>
                                <p className='tpproduct-title mb-1 text-gray-500'>Frederick Valdez</p>
                                <h1 className='tpproduct-ammount'>$90.00</h1>
                            </div>
                        </div>
                        <div className='card p-1'>
                            <div className='card-img'>
                                <img src={product19} alt="" className='rounded-lg' />
                            </div>
                            <div className='card-body py-3'>
                                <p className='tpproduct-title mb-1 text-gray-500'>Terry Byrd</p>
                                <h1 className='tpproduct-ammount'>$100.00</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
  )
}

export default PopularProducts
