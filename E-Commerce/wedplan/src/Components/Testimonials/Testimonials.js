import React from 'react'
import TeatData from './TeatData'
import CommonTes from './CommonTes'

// asset
import asset8 from '../../assets/asset 8.png'

function Testimonials() {
    return (
        <React.Fragment>
            <section id='testimonials' className='container mx-auto px-5 md:px-10 pt-20 pb-24 bg-gray-100 relative'>
                <div className='absolute -top-20 left-0'>
                    <img src={asset8} alt="" />
                </div>
                <div>
                    <div className='text-center'>
                        <h1 className='text-4xl'>Testimonials</h1>
                    </div>
                    <div className='mx-auto mt-2 mb-14 w-[100%] max-w-[390px]'>
                        <p className='text-xl text-gray-500 text-center'>Check reviews to discover what clients have to say about our capabilities and results</p>
                    </div>
                    <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-10'>
                        {TeatData.map((cvalue, index, array) => {
                            return (
                                <CommonTes
                                    key={index}
                                    id={cvalue.id}
                                    para={cvalue.para}
                                    name={cvalue.name}
                                    rating={cvalue.rating}
                                    img={cvalue.img}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Testimonials
