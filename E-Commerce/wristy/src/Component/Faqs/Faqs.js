import React from 'react'

// assets link
import asset73 from '../../Assets/asset 73.jpg'

// react icon
import { HiOutlineArrowRight } from "react-icons/hi2";
import Accordion from '../../Component/Accordion/Accordion'

// css link
import './faqs.css'

function Faqs() {
    return (
        <div>
            <section className='faq container mx-auto px-10 mb-28'>
                <div className='page-title'>
                    <div className='blog-heading flex justify-between py-14'>
                        <div>
                            <p className='sub-title text-xs'>FAQ'S</p>
                            <h2 className='section-heading text-3xl'>Have Any Questions?</h2>
                        </div>
                    </div>
                </div>
                <div className='faq-wrap grid lg:grid-cols-2 items-center gap-10'>
                    <div className='faq-img'>
                        <img src={asset73} alt="" />
                    </div>
                    <div className='faq-right'>
                        <div className=''>
                            <Accordion />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faqs
