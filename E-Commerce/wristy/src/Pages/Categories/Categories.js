import React from 'react'

// assets
import asset74 from '../../Assets/asset 74.jpg'
import asset75 from '../../Assets/asset 75.jpg'
import asset76 from '../../Assets/asset 76.jpg'
import asset77 from '../../Assets/asset 77.jpg'
import asset78 from '../../Assets/asset 78.jpg'
import asset79 from '../../Assets/asset 79.jpg'
import asset80 from '../../Assets/asset 80.jpg'
import asset81 from '../../Assets/asset 81.jpg'
import asset82 from '../../Assets/asset 82.jpg'
import asset83 from '../../Assets/asset 83.jpg'
import asset84 from '../../Assets/asset 84.jpg'
import asset85 from '../../Assets/asset 85.jpg'

// css link 
import './categories.css'
import Signature from '../../Component/Signature/Signature'

function Categories() {
    return (
        <div>
            <div className='categories container mx-auto px-10 mb-[8rem]'>
                <div className='page-title'>
                    <div className='blog-heading flex justify-between py-14'>
                        <div>
                            <p className='sub-title text-xs'>EXPLORE</p>
                            <h2 className='section-heading text-4xl'>Watch Categories</h2>
                        </div>
                    </div>
                </div>
                <div className='w-dyn-list'>
                    <div className='list grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        <div className='li-post listitem'>
                            <a href="#" className='box-img relative overflow-hidden'>
                                <img src={asset74} alt="" className='img-post' />
                                <div className='categories-data absolute bottom-0 flex flex-col justify-center text-center text-white'>
                                    <h4 className='cat-text text-lg'>Smart Watches</h4>
                                    <p className='cat-p'>90+ Cartoon's watch collections</p>
                                </div>
                            </a>
                        </div>
                        <div className='li-post listitem'>
                            <a href="#" className='box-img relative'>
                                <img src={asset75} alt="" className='img-post' />
                                <div className='categories-data absolute bottom-0 flex flex-col justify-center text-center text-white'>
                                    <h4 className='cat-text text-lg'>Chronograph Watches</h4>
                                    <p className='cat-p'>23+ Stylish unique watches</p>
                                </div>
                            </a>
                        </div>
                        <div className='li-post listitem'>
                            <a href="#" className='box-img relative'>
                                <img src={asset76} alt="" className='img-post' />
                                <div className='categories-data absolute bottom-0 flex flex-col justify-center text-center text-white'>
                                    <h4 className='cat-text text-lg'>Men's Watch</h4>
                                    <p className='cat-p'>84+ Premium watch collections</p>
                                </div>
                            </a>
                        </div>
                        <div className='li-post listitem'>
                            <a href="#" className='box-img relative'>
                                <img src={asset77} alt="" className='img-post' />
                                <div className='categories-data absolute bottom-0 flex flex-col justify-center text-center text-white'>
                                    <h4 className='cat-text text-lg'>Women's Watch</h4>
                                    <p className='cat-p'>50+ Classic watch collections</p>
                                </div>
                            </a>
                        </div>
                        <div className='li-post listitem'>
                            <a href="#" className='box-img relative'>
                                <img src={asset78} alt="" className='img-post' />
                                <div className='categories-data absolute bottom-0 flex flex-col justify-center text-center text-white'>
                                    <h4 className='cat-text text-lg'>Leather Watches</h4>
                                    <p className='cat-p'>26+ Leather color collections</p>
                                </div>
                            </a>
                        </div>
                        <div className='li-post listitem'>
                            <a href="#" className='box-img relative'>
                                <img src={asset79} alt="" className='img-post' />
                                <div className='categories-data absolute bottom-0 flex flex-col justify-center text-center text-white'>
                                    <h4 className='cat-text text-lg'>Skeleton Watches</h4>
                                    <p className='cat-p'>48+ uniquely crafted skeleton watches</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Signature />
            </div>
            <section className='instagram-container container mx-auto px-10 mb-[7rem]'>
                <div className='instagram'>
                    <div className='insta-title text-center'>
                        <h3 className='insta-heading text-2xl mb-2'>Share your stylish moments with #watchwonders</h3>
                        <p className='insta-text mb-10 text-stone-700'>Capture your wristwear adventures and become part of our watch community! Share your stylish moments with #WatchWonders for a chance to be featured on our Instagram page.</p>
                    </div>
                    <div className='grid md:grid-cols-4 lg:grid-cols-6 gap-3'>
                        <div className='li-post'>
                            <a href="#" className='box-img'>
                                <img src={asset80} alt="" className='img-post' />
                            </a>
                        </div>
                        <div className='li-post'>
                            <a href="#" className='box-img'>
                                <img src={asset81} alt="" className='img-post' />
                            </a>
                        </div>
                        <div className='li-post'>
                            <a href="#" className='box-img'>
                                <img src={asset82} alt="" className='img-post' />
                            </a>
                        </div>
                        <div className='li-post'>
                            <a href="#" className='box-img'>
                                <img src={asset83} alt="" className='img-post' />
                            </a>
                        </div>
                        <div className='li-post'>
                            <a href="#" className='box-img'>
                                <img src={asset84} alt="" className='img-post' />
                            </a>
                        </div>
                        <div className='li-post'>
                            <a href="#" className='box-img'>
                                <img src={asset85} alt="" className='img-post' />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Categories
