import React from 'react'

// react icons
import { FaCheck } from "react-icons/fa6";

function CommonPac({ id, img, heading, para, price, para2, title, list1, list2, list3, list4, list5, list6 }) {
    return (
        <React.Fragment>
            <section className=''>
                <div className=''>
                    <div className="bg-white">
                        <div className='p-4'>
                            <img src={img} alt="" className='w-[100%]' />
                        </div>
                        <div className="pt-9 pb-4 px-6">
                            <div>
                                <h4 className='text-2xl'>{heading}</h4>
                            </div>
                            <div className='my-3'>
                                <p className='text-base text-teal-500'>{para}</p>
                            </div>
                            <div>
                                <p className='text-xl'>${price} + Venue Hire*</p>
                            </div>
                            <div className='mt-5 pt-6 border-t border-gray-200'>
                                <p className='text-base text-gray-500'>{para2}</p>
                            </div>
                            <div className='mt-8 mb-5'>
                                <p className='text-xl'>{title}</p>
                            </div>
                            <div>
                                <ul>
                                    <li className='mb-5 text-gray-500 flex items-center'>
                                        <FaCheck className='text-teal-600 mr-3' />
                                        {list1}
                                    </li>
                                    <li className='mb-5 text-gray-500 flex items-center'>
                                        <FaCheck className='text-teal-600 mr-3' />
                                        {list2}
                                    </li>
                                    <li className='mb-5 text-gray-500 flex items-center'>
                                        <FaCheck className='text-teal-600 mr-3' />
                                        {list3}
                                    </li>
                                    <li className='mb-5 text-gray-500 flex items-center'>
                                        <FaCheck className='text-teal-600 mr-3' />
                                        {list4}
                                    </li>
                                    <li className='mb-5 text-gray-500 flex items-center'>
                                        <FaCheck className='text-teal-600 mr-3' />
                                        {list5}
                                    </li>
                                    <li className='mb-5 text-gray-500 flex items-center'>
                                        <FaCheck className='text-teal-600 mr-3' />
                                        {list6}
                                    </li>
                                </ul>
                            </div>
                            <div className='mt-6'>
                                <button className='bg-teal-500 text-white px-7 py-2 '>Enquire</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default CommonPac
