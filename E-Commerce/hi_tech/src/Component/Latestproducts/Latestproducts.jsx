// import React from 'react'

import Commonproduct from "./Commonproduct"
import LatestData from "./LatestData"

// assets
import asset17 from '../../assets/asset 17.svg'

function Latestproducts() {
    return (
        <>
            <section className="container mx-auto px-5 md:px-10 mb-16 md:mb-36">
                <div className="mb-6">
                    <div className="border-b pb-4 flex justify-between items-center">
                        <h2 className="text-4xl">Latest Products</h2>
                        <div className='flex items-center'>
                            <a href="/" className="text-[#999] text-sm">View All</a>
                            <img src={asset17} alt="" className='ml-1' />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        LatestData.map((item, ind) => {
                            return (
                                <Commonproduct
                                    key={ind}
                                    id={item.id}
                                    img={item.img}
                                    name={item.name}
                                    price={item.price}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Latestproducts
