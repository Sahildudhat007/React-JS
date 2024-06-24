import React from 'react'

// css link
import './signature.css'

function Signature() {
    return (
        <div>
            <section className='cta mb-32'>
                <div className='w-layout-blockcontainer container mx-auto px-10'>
                    <div className='cta-wrap'>
                        <h3 className='cta-title text-2xl text-white mb-2'>Find your signature timepiece.</h3>
                        <p className='cta-text text-sm text-zinc-300'>Where luxury meets individuality. Discover a curated selection of exquisite watches<br/> that resonate with your unique style and personality.</p>
                        <button className='cta-btn-wrap mt-7 py-3 px-5 border text-xs text-white hover:bg-white hover:text-black'>Shop Collection</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signature