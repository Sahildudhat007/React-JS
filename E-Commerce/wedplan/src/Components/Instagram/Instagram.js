import React from 'react'

// assets
import asset29 from '../../assets/asset 29.jpeg'
import asset30 from '../../assets/asset 30.jpeg'
import asset31 from '../../assets/asset 31.jpeg'
import asset32 from '../../assets/asset 32.jpeg'

function Instagram() {
    return (
        <React.Fragment>
            <section id='instagram' className='container mx-auto'>
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
                    <a href="https://assets.website-files.com/6224c960dd39af2bb5b5f59b/6283546e60e7fb7cc273749e_gallery-2-min.jpg"
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src={asset29} alt="" />
                    </a>
                    <a href="https://assets.website-files.com/6224c960dd39af2bb5b5f59b/6283546edfdba34c9f26e69f_gallery-3-min.jpg"
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src={asset30} alt="" />
                    </a>
                    <a href="https://assets.website-files.com/6224c960dd39af2bb5b5f59b/6283546d3aea71073f74e6c7_gallery-1-min.jpg"
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src={asset31} alt="" />
                    </a>
                    <a href="https://assets.website-files.com/6224c960dd39af2bb5b5f59b/6283546eaef9699fc6b9c71d_gallery-4-min.jpg"
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src={asset32} alt="" />
                    </a>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Instagram
