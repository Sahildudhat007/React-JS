import React from 'react'

import asset25 from '../../assets/asset 25.svg'
import asset41 from '../../assets/asset 41.svg'

function CommonTes({ id, para, name, rating, img }) {
    return (
        <React.Fragment>
            <section className='bg-white'>
                <div className='p-10 relative'>
                    <div className='absolute -top-7'>
                        <img src={asset25} alt="" />
                    </div>
                    <div className='mt-6'>
                        <p className='text-base'>{para}</p>
                    </div>
                    <div className='flex items-center justify-between mt-14'>
                        <div className=''>
                            <div>
                                <h4 className='text-xl'>{name}</h4>
                            </div>
                            <div className='mt-1 flex items-center'>
                                <p>{rating}</p>
                                <div className='flex ml-2 space-x-1'>
                                    <img src={asset41} alt="" className='w-[12px]' />
                                    <img src={asset41} alt="" className='w-[12px]' />
                                    <img src={asset41} alt="" className='w-[12px]' />
                                    <img src={asset41} alt="" className='w-[12px]' />
                                    <img src={asset41} alt="" className='w-[12px]' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default CommonTes
