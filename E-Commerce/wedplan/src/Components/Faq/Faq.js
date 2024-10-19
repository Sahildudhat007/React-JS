import React from 'react'
import Faqs from './Faqs'

function Faq() {
    return (
        <React.Fragment>
            <section id='faq' className='container mx-auto px-5 md:px-10 py-20'>
                <div className='text-center'>
                    <h1 className='text-4xl md:text-[46px]'>Frequently asked questions</h1>
                </div>
                <div className='mt-5 md:mt-2 mb-14 text-center'>
                    <p className='text-xl'>We have put together some commonly asked questions</p>
                </div>
                <div>
                    <Faqs />
                </div>
            </section>
        </React.Fragment>
    )
}

export default Faq
