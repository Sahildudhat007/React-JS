// import React from 'react'

// assets
import asset72 from '../../assets/asset 72.jpeg'
import asset73 from '../../assets/asset 73.jpeg'
import asset74 from '../../assets/asset 74.jpeg'
import asset75 from '../../assets/asset 75.jpeg'
import asset76 from '../../assets/asset 76.jpeg'
import asset77 from '../../assets/asset 77.jpeg'

function Instagram() {
    return (
        <>
            <section className="container mx-auto px-5 py-20 bg-[#dbe5e1]">
                <div className="mb-[25px] text-center">
                    <h4 className="mb-[6px] text-[22px]">#hitechproduction on Instagram</h4>
                    <p className="text-sm">Discover the latest in high-tech production and innovation with on Instagram.</p>
                </div>
                <div className='grid grid-cols-3 md:grid-cols-6 gap-5'>
                    <a href="/">
                        <img src={asset72} alt="" className='rounded-md' />
                    </a>
                    <a href="/">
                        <img src={asset73} alt="" className='rounded-md' />
                    </a>
                    <a href="/">
                        <img src={asset74} alt="" className='rounded-md' />
                    </a>
                    <a href="/">
                        <img src={asset75} alt="" className='rounded-md' />
                    </a>
                    <a href="/">
                        <img src={asset76} alt="" className='rounded-md' />
                    </a>
                    <a href="/">
                        <img src={asset77} alt="" className='rounded-md' />
                    </a>
                </div>
            </section>
        </>
    )
}

export default Instagram
