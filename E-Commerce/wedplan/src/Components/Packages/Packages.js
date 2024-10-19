import React from 'react'

// css link
import './packages.css'

// react icons
import { FiPhone } from "react-icons/fi";
import { BsSend } from "react-icons/bs";

// assets
import asset8 from '../../assets/asset 8.png'
import CommonPac from './CommonPac'
import CommonData from './CommonData'

function Packages() {
    return (
        <React.Fragment>
            <section id='packages' className='packages container mx-auto px-5 md:px-10 lg:px-10 py-20 relative'>
                <div className='absolute -top-20 left-0'>
                    <img src={asset8} alt="" className='' />
                </div>
                <div className='text-center'>
                    <div className=''>
                        <h3 className='text-4xl md:text-5xl leading-[60px]'>Wedding Packages</h3>
                        <p className='mt-3 mb-8 text-xl'>Select your wedding package that suits your pocket</p>
                    </div>
                    <div>
                        <div className='space-x-4 space-y-4'>
                            <button className='bg-teal-500 text-white px-4 py-2'>Upto to 100 guest</button>
                            <button className='px-4 py-2 border border-gray-400'>Upto to 200 guest</button>
                            <button className='px-4 py-2 border border-gray-400'>Upto to 500 guest</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='pt-12'>
                        <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-8'>
                            {CommonData.map((cvalue, index, array) => {
                                return (
                                    <CommonPac
                                        key={index}
                                        id={cvalue.id}
                                        img={cvalue.img}
                                        heading={cvalue.heading}
                                        para={cvalue.para}
                                        price={cvalue.price}
                                        para2={cvalue.para2}
                                        title={cvalue.title}
                                        list1={cvalue.list1}
                                        list2={cvalue.list2}
                                        list3={cvalue.list3}
                                        list4={cvalue.list4}
                                        list5={cvalue.list5}
                                        list6={cvalue.list6}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-back_img px-5 h-96 bg-center bg-cover relative'>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                    <h1 className="text-[40px] md:text-[46px] leading-[50px]">Looking for a custom Package?</h1>
                    <p className="text-lg md:text-xl mt-3 mb-10">
                        We offer customized packages as per your budget and requirement
                    </p>
                    <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4">
                        <a
                            href="tel:1800-123"
                            className='flex items-center px-12 py-3 bg-teal-500 text-white text-[17px]'>
                            <FiPhone className='mr-2' />1800-123
                        </a>
                        <a
                            href="#enquire"
                            className='flex items-center px-12 py-3 bg-white text-black text-[17px]'>
                            <BsSend className='mr-2' />Enquire now
                        </a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Packages
