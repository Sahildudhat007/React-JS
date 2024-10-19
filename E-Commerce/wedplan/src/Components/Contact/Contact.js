import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

// assets
import asset8 from '../../assets/asset 8.png'
import asset40 from '../../assets/asset 40.png'
import asset33 from '../../assets/asset 33.svg'
import asset34 from '../../assets/asset 34.svg'
import asset35 from '../../assets/asset 35.svg'

function Contact() {

    const currentForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_dczbtyq', 'template_3xski1e', currentForm.current, {
                publicKey: 'JBYBql5KofvPuQ-Zu',
            })
            .then(
                () => {
                    alert('SUCCESS!');  
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <React.Fragment>
            <section id='contact' className='container mx-auto px-5 md:px-10 py-24 bg-gray-100'>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-7 relative">
                    <div className="w-[100%] py-14 px-8 md:px-14 bg-white z-10">
                        {/* Enquiry Form Section */}
                        <h2 className="text-3xl">Enquiry form</h2>
                        <p className="text-gray-600 text-[17px] mt-3 mb-9">
                            Let us know about your requirements. Our staff will contact you.
                        </p>
                        <form ref={currentForm} className="" onSubmit={sendEmail}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-7">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="border-b border-gray-300 placeholder:text-gray-600 p-2 w-full"
                                    name="name"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="border-b border-gray-300 placeholder:text-gray-600 p-2 w-full"
                                    name="phone"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-7">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="border-b border-gray-300 placeholder:text-gray-600 p-2 w-full"
                                    name="email"
                                />
                                <input
                                    type="text"
                                    placeholder="Budget"
                                    className="border-b border-gray-300 placeholder:text-gray-600 p-2 w-full"
                                    name="budget"
                                />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="border-b border-gray-300 placeholder:text-gray-600 p-2 w-full"
                                    name="location"
                                />
                                <input
                                    type="text"
                                    placeholder="Package"
                                    className="border-b border-gray-300 placeholder:text-gray-600 p-2 w-full"
                                    name="package"
                                />
                            </div>
                            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-7">
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
                            </div> */}
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
                    </div>
                    <div className='absolute -left-10 -bottom-24'>
                        <img src={asset8} alt="" />
                    </div>
                    {/* Contact Details Section */}
                    <div className=" bg-white py-14 px-8 md:px-14 relative">
                        <h2 className="text-3xl mb-7">Contact Details</h2>
                        <p className="text-gray-600 mb-5 text-[17px] flex items-center">
                            <img src={asset33} alt="" className='w-[13.5px] mt-1 mr-5' />
                            HSR Layout 21st Cross, <br />
                            Bangalore - 560102
                        </p>
                        <p className="text-gray-600 mb-5">
                            <a href="mailto:support@brandexponents.com" className="text-[17px] flex items-center">
                                <img src={asset34} alt="" className='w-[13.5px] mt-1 mr-5' />
                                support@brandexponents.com
                            </a>
                        </p>
                        <p className="text-gray-600 mb-5">
                            <a href="tel:+1800123" className="text-xl flex items-center">
                                <img src={asset35} alt="" className='w-[13.5px] mt-1 mr-5' />
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
