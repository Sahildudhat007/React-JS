import React from 'react'

// css link
import './review.css'

// react icon
import { FaStar } from "react-icons/fa";

// assets
import assets65 from '../../Assets/asset 65.jpg'
import assets66 from '../../Assets/asset 66.jpg'
import assets67 from '../../Assets/asset 67.jpg'
import assets68 from '../../Assets/asset 68.jpg'
import assets69 from '../../Assets/asset 69.jpg'
import assets70 from '../../Assets/asset 70.jpg'
import Signature from '../../Component/Signature/Signature';


function Review() {
    return (
        <div>
            <div className='page-title'>
                <div className='w-layout-blockcontainer container mx-auto px-10 mb-24'>
                    <div className='blog-heading flex justify-between py-14'>
                        <div>
                            <p className='sub-title text-xs'>TESTIMONIALS</p>
                            <h2 className='section-heading text-4xl'>Customer Reviews</h2>
                        </div>
                    </div>
                    <div className='review'>
                        <div className='review-wrap grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            <div className='review-block border border-zinc-300 p-10 hover:border-black'>
                                <div className='star-wrap flex mb-14'>
                                    <FaStar className='star text-orange-600 text-lg' />
                                    <FaStar className='star text-orange-600 text-lg' />
                                    <FaStar className='star text-orange-600 text-lg' />
                                    <FaStar className='star text-gray-300 text-lg' />
                                    <FaStar className='star text-gray-300 text-lg' />
                                </div>
                                <div className='review-data'>
                                    <p className='review-text mb-8 text-gray-700'>The watch exceeded my expectations in terms of quality and watch design. It's become a staple accessory in my wardrobe, and I've received countless compliments on its elegant style.</p>
                                    <div className='review-btm flex items-center'>
                                        <div className='review-img mt-1 mr-3'>
                                            <img src={assets65} alt="" className='rounded-full w-10' />
                                        </div>
                                        <div>
                                            <h2 className='review-name text-md'>Darlene Robertson</h2>
                                            <p className='review-location text-xs'>Texas, USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='review-block border border-zinc-300 p-10 hover:border-black'>
                                <div className='star-wrap flex mb-14'>
                                    <FaStar className='star text-orange-600 text-lg' />
                                    <FaStar className='star text-orange-600 text-lg' />
                                    <FaStar className='star text-orange-600 text-lg' />
                                    <FaStar className='star text-orange-600 text-lg' />
                                    <FaStar className='star text-gray-300 text-lg' />
                                </div>
                                <div className='review-data'>
                                    <p className='review-text mb-8 text-gray-700'>I recently bought a watch from this website, and I'm extremely impressed with the level of service and the quality of the product. The watch arrived promptly and was beautifully packaged.</p>
                                    <div className='review-btm flex items-center'>
                                        <div className='review-img mt-1 mr-3'>
                                            <img src={assets66} alt="" className='rounded-full w-10' />
                                        </div>
                                        <div>
                                            <h2 className='review-name text-md'>Cameron Williamson</h2>
                                            <p className='review-location text-xs'>Grorgia, USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='review-block border border-zinc-300 p-10 hover:border-black'>
                                <div className='star-wrap flex mb-14'>
                                    <FaStar className='star text-orange-600 text-lg' />
                                    <FaStar className='star text-orange-600 text-lg' />
                                    <FaStar className='star text-orange-600 text-lg' />
                                    <FaStar className='star text-orange-600 text-lg' />
                                    <FaStar className='star text-gray-300 text-lg' />
                                </div>
                                <div className='review-data'>
                                    <p className='review-text mb-8 text-gray-700'>I've been a watch enthusiast for years, and I can confidently say that the watch I purchased from here is one of the best I've ever owned. The craftsmanship is superb, and it keeps perfect time.</p>
                                    <div className='review-btm flex items-center'>
                                        <div className='review-img mt-1 mr-3'>
                                            <img src={assets67} alt="" className='rounded-full w-10' />
                                        </div>
                                        <div>
                                            <h2 className='review-name text-md'>Jacob Jones</h2>
                                            <p className='review-location text-xs'>California, USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='review-block border border-zinc-300 p-10 hover:border-black'>
                                <div className='star-wrap flex mb-14'>
                                    <FaStar className='star text-orange-600 text-lg' />
                                    <FaStar className='star text-orange-600 text-lg' />
                                    <FaStar className='star text-orange-600 text-lg' />
                                    <FaStar className='star text-orange-600 text-lg' />
                                    <FaStar className='star text-orange-600 text-lg' />
                                </div>
                                <div className='review-data'>
                                    <p className='review-text mb-8 text-gray-700'>As someone who appreciates fine watches, I'm thrilled with the selection & variety offered by this company. Whether you're looking for a classic timepiece or something more modern, you're sure to find it here.</p>
                                    <div className='review-btm flex items-center'>
                                        <div className='review-img mt-1 mr-3'>
                                            <img src={assets68} alt="" className='rounded-full w-10' />
                                        </div>
                                        <div>
                                            <h2 className='review-name text-md'>Wade Warren</h2>
                                            <p className='review-location text-xs'>Toronto, USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='review-block border border-zinc-300 p-10 hover:border-black'>
                                <div className='star-wrap flex mb-14'>
                                    <FaStar className='star text-orange-600 text-lg' />
                                    <FaStar className='star text-orange-600 text-lg' />
                                    <FaStar className='star text-orange-600 text-lg' />
                                    <FaStar className='star text-gray-300 text-lg' />
                                    <FaStar className='star text-gray-300 text-lg' />
                                </div>
                                <div className='review-data'>
                                    <p className='review-text mb-8 text-gray-700'>I bought a watch as a gift for my husband, and he absolutely loves it! The quality is exceptional, and it looks even better in person. It's become his go-to watch for both casual and formal occasions.</p>
                                    <div className='review-btm flex items-center'>
                                        <div className='review-img mt-1 mr-3'>
                                            <img src={assets69} alt="" className='rounded-full w-10' />
                                        </div>
                                        <div>
                                            <h2 className='review-name text-md'>Kristin Watson</h2>
                                            <p className='review-location text-xs'>Dallas, USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='review-block border border-zinc-300 p-10 hover:border-black'>
                                <div className='star-wrap flex mb-14'>
                                    <FaStar className='star text-orange-600 text-lg' />
                                    <FaStar className='star text-orange-600 text-lg' />
                                    <FaStar className='star text-orange-600 text-lg' />
                                    <FaStar className='star text-orange-600 text-lg' />
                                    <FaStar className='star text-gray-300 text-lg' />
                                </div>
                                <div className='review-data'>
                                    <p className='review-text mb-8 text-gray-700'>Exceptional service from start to finish! I reached out to the customer support team with a few questions about a particular watch, and they were incredibly helpful and knowledgeable.</p>
                                    <div className='review-btm flex items-center'>
                                        <div className='review-img mt-1 mr-3'>
                                            <img src={assets70} alt="" className='rounded-full w-10' />
                                        </div>
                                        <div>
                                            <h2 className='review-name text-md'>Theresa Webb</h2>
                                            <p className='review-location text-xs'>Florida, USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Signature/>
            </div>
        </div>
    )
}

export default Review
