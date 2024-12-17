// import React from 'react'

import propTypes from 'prop-types'

function Commonselling({ id, img, productname, productprice }) {
    return (
        <>
            <div className="container mx-auto px-5">
                <a id={id} href="/">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className="mt-4 mb-[2px]">
                        <h6 className=''>{productname}</h6>
                        <p className='text-gray-500'>$&nbsp;{productprice}.00&nbsp;USD</p>
                    </div>
                </a>
            </div>
        </>
    )
}

Commonselling.propTypes = {
    img: propTypes.string,
    productname: propTypes.string,
    productprice: propTypes.string,
    id: propTypes.number
}

export default Commonselling
