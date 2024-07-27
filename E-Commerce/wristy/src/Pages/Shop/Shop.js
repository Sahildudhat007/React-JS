import React from 'react'

// react icon
import { HiArrowLongRight } from "react-icons/hi2";

// css link
import './shop.css'

import CommonShop from './CommonShop'
import CommonData from '../../Component/CommonData/CommonData'
import Signature from '../../Component/Signature/Signature';

function Shop() {
    return (
        <div>
            <section className='shops'>
                <div className='w-layout-blockcontainer container mx-auto px-10 mb-24'>
                    <div className='blog-heading flex justify-between py-14'>
                        <div>
                            <p className='sub-title text-xs'>WRISTY TRENDS</p>
                            <h2 className='section-heading text-3xl'>Latest Products</h2>
                        </div>
                        <div className='blog-btn mt-8'>
                            <a href="#" className='flex items-center text-xs'>View All <HiArrowLongRight className='text-lg ml-1' /></a>
                        </div>
                    </div>
                    <div className='w-dyn-list'>
                        <div className='post-list grid md:grid-cols-3 lg:grid-cols-4 gap-6'>
                            {CommonData.productData.map((shop) => {
                                const { id, img, product, rate } = shop
                                return (
                                    <CommonShop key={id} img={img} product={product} rate={rate} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <Signature/>
            </div>
        </div>
    )
}

export default Shop
