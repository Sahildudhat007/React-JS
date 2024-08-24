import React from 'react'
import { Link } from 'react-router-dom'

import ProductDetails from '../../Component/ProductDetails/ProductDetails'

function CommonShop({ id, img, product, rate, quantity }) {

    return (
        <div>
            <div className='w-dyn-list'>
                <div className='post-list'>
                    <div className="post">
                        <div className='img-box'>
                            <Link to={`/productDetails/${id}`}>
                                <img src={img} alt="" className='post-img' />
                            </Link>
                        </div>
                        <div className="mt-3">
                            <p className='mb-2'>
                                <Link to={`/productDetails/${id}`} className=''>{product}</Link>
                            </p>
                            <p className='mb-4'>
                                <a href="#" className='text-sm'>{rate}</a>  
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommonShop
