import React from 'react'

function CommonUsp({ id, img, number, title, para }) {
    return (
        <React.Fragment>
            <section className='text-center'>
                <div className='flex justify-center'>
                    <img src={img} alt="" />
                </div>
                <div className='mt-5 mb-4'>
                    <h1 className='text-6xl text-white'>{number}+</h1>
                </div>
                <div className='mb-4'>
                    <p className='text-xl text-white'>{title}</p>
                </div>
                <div>
                    <p className='text-lg text-white'>{para}</p>
                </div>
            </section>
        </React.Fragment>
    )
}

export default CommonUsp
