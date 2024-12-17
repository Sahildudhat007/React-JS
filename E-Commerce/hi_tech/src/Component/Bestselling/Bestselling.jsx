// import React from 'react'

// assets
import asset17 from '../../assets/asset 17.svg'

function Bestselling() {
    return (
        <>
            <section className="container mx-auto px-5 md:px-10 mb-16 md:mb-36">
                <div className="md:mb-6 flex items-center justify-between border-b border-stone-400">
                    <h2 className="pb-4 text-3xl md:text-4xl">Best Selling Products</h2>
                    <div className='flex items-center'>
                        <a href="/" className="text-[#999] text-sm">View All</a>
                        <img src={asset17} alt="" className='ml-1' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bestselling
