import React from 'react'

// assets
import asset10 from '../../assets/asset 10.jpeg'
import asset11 from '../../assets/asset 11.jpeg'
import asset12 from '../../assets/asset 12.jpeg'
import asset13 from '../../assets/asset 13.jpeg'
import asset14 from '../../assets/asset 14.jpeg'
import asset15 from '../../assets/asset 15.jpeg'


function Gallery() {
    return (
        <React.Fragment>
            <section id='gallery' className='container mx-auto px-5 md:px-10 lg:px-10 pt-20 pb-24'>
                <div className='text-center'>
                    <h2 className='text-4xl'>Wedding Gallery</h2>
                    <p className='mt-3 mb-11 text-xl text-gray-500'>Our favorite real wedding photos of 2020</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    <div className='grid gap-3'>
                        <a href="...">
                            <img src={asset10} alt="" />
                        </a>
                        <a href="...">
                            <img src={asset11} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="...">
                            <img src={asset12} alt="" />
                        </a>
                    </div>
                    <div className='grid gap-3'>
                        <a href="...">
                            <img src={asset13} alt="" />
                        </a>
                        <a href="...">
                            <img src={asset14} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="...">
                            <img src={asset15} alt="" />
                        </a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Gallery
