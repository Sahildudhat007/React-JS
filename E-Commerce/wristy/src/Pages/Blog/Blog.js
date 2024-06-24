import React from 'react'

// react icon
import { HiArrowLongRight } from "react-icons/hi2";

// css link
import './blog.css'

import Commonblog from './Commonblog';
import CommonData from '../../Component/CommonData/CommonData';
import Footer from '../../Component/Footer/Footer';
import Signature from '../../Component/Signature/Signature';

function Blog() {
    return (
        <div>
            <section className='blogs'>
                <div className='w-layout-blockcontainer container mx-auto px-10 mb-24'>
                    <div className='blog-heading flex justify-between py-14'>
                        <div>
                            <p className='sub-title text-xs'>BLOGS</p>
                            <h2 className='section-heading text-3xl'>News & Articles</h2>
                        </div>
                        <div className='blog-btn mt-8'>
                            <a href="#" className='flex items-center text-xs'>View All <HiArrowLongRight className='text-lg ml-1' /></a>
                        </div>
                    </div>
                    <div className='w-dyn-list'>
                        <div className='post-list grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {CommonData.blogData.map((blog) => {
                                const { id, img, para, title, written } = blog
                                return (
                                    <Commonblog key={id} img={img} para={para} title={title} written={written} />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div>
                    <Signature />
                </div>
                <div>
                    <Footer />
                </div>
            </section>
        </div>
    )
}

export default Blog
