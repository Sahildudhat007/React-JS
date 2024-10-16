import React from 'react'

// assets
import asset8 from '../../assets/asset 8.png'
import asset40 from '../../assets/asset 40.png'

function Contact() {
    return (
        <React.Fragment>
            <section id='contact' className='container mx-auto px-10 py-24 bg-gray-100'>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-7">
                    <div className="w-[100%] py-14 px-14 bg-white relative">
                        {/* Enquiry Form Section */}
                        <h2 className="text-3xl">Enquiry form</h2>
                        <p className="text-gray-600 text-[17px] mt-3 mb-9">
                            Let us know about your requirements. Our staff will contact you.
                        </p>
                        <form className="">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-7">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="border-b border-gray-300 placeholder:text-gray-600 p-2 w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="border-b border-gray-300 placeholder:text-gray-600 p-2 w-full"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-7">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="border-b border-gray-300 placeholder:text-gray-600 p-2 w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Budget"
                                    className="border-b border-gray-300 placeholder:text-gray-600 p-2 w-full"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-7">
                                <select
                                    className="border-b border-gray-300 text-gray-600 p-2 w-full"
                                >
                                    <option value="" className='outline-0'>Desired Location</option>
                                </select>
                                <select
                                    className="border-b border-gray-300 text-gray-600 p-2 w-full"
                                >
                                    <option value="" className='outline-0'>Select Package</option>
                                </select>
                            </div>
                            <textarea
                                placeholder="Message"
                                className="border-b border-gray-300 placeholder:text-gray-600 p-2 w-full mb-7"
                                rows="4"
                            />
                            <button
                                type="submit"
                                className="bg-teal-500 text-white mt-7 px-2 py-4 rounded-md w-full md:w-1/3"
                            >
                                Submit
                            </button>
                        </form>
                        <div className='absolute -bottom-24 -left-10'>
                            <img src={asset8} alt="" />
                        </div>
                    </div>
                    {/* Contact Details Section */}
                    <div className=" bg-white py-14 px-14 relative">
                        <h2 className="text-3xl mb-7">Contact Details</h2>
                        <p className="text-gray-600 mb-5 text-[17px]">
                            HSR Layout 21st Cross, <br />
                            Bangalore - 560102
                        </p>
                        <p className="text-gray-600 mb-5">
                            <a href="mailto:support@brandexponents.com" className="text-[17px]">
                                support@brandexponents.com
                            </a>
                        </p>
                        <p className="text-gray-600 mb-5">
                            <a href="tel:+1800123" className="text-xl">
                                +1800-123
                            </a>
                        </p>
                        <h3 className="text-xl mt-10 mb-1">Follow on</h3>
                        <div className="flex space-x-4">
                            <a href="..." className="text-xs hover:text-teal-500">
                                FB
                            </a>
                            <a href="..." className="text-xs hover:text-teal-500">
                                IN
                            </a>
                            <a href="..." className="text-xs hover:text-teal-500">
                                TW
                            </a>
                        </div>
                        <div className='absolute bottom-0 right-0'>
                            <img src={asset40} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Contact
