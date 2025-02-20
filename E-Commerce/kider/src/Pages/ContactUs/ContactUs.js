import React from 'react'
import PageHeading from '../../Components/PageHeading/PageHeading'

function ContactUs() {
    return (
        <>
            <PageHeading goBackLink='Home' pageTitle='Contact Us' />
            <div className='container py-12 px-3 mx-auto'>
                <div className='px-3'>
                    <div className='text-center mx-auto mb-12 max-w-[600px]'>
                        <h1 className='mb-4 font-bold text-[2.5rem] text-[#103741]' style={{ fontFamily: "'Lobster Two', cursive" }}>Get In Touch</h1>
                        <p className='mb-4 text-[#74787C] text-base'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
                        <div className='mt-6 px-3 text-center'>
                            <div className='flex items-center justify-center'>
                                <div className='w-[75px] h-[75px] rounded-full bg-[#FFF5F3] mb-6 flex justify-center items-center text-center'>
                                    <i className='fa fa-map-marker-alt fa-2x font-black text-[#FE5D37]'></i>
                                </div>
                            </div>
                            <h6 className='font-semibold text-[#103741] text-base mb-2'>123 Street, New York, USA</h6>
                        </div>
                        <div className='mt-6 px-3 flex flex-col justify-center text-center'>
                            <div className='flex items-center justify-center'>
                                <div className='w-[75px] h-[75px] rounded-full bg-[#FFF5F3] mb-6 flex items-center justify-center text-center'>
                                    <i className='fa fa-envelope-open fa-2x text-[#FE5D37]'></i>
                                </div>
                            </div>
                            <h6 className='font-semibold text-[#103741] text-base mb-2'>info@example.com</h6>
                        </div>
                        <div className='mt-6 px-3 flex flex-col justify-center text-center'>
                            <div className='flex items-center justify-center'>
                                <div className='w-[75px] h-[75px] rounded-full bg-[#FFF5F3] mb-6 flex items-center justify-center text-center'>
                                    <i className='fa fa-phone fa-2x text-[#FE5D37]'></i>
                                </div>
                            </div>
                            <h6 className='font-semibold text-[#103741] text-base mb-2'>+012 345 6789</h6>
                        </div>
                    </div>
                    <div className='bg-[#FFF5F3] rounded-[10px]'>
                        <div className='grid grid-cols-1 lg:grid-cols-2'>
                            <div className='flex flex-col justify-center p-12'>
                                <p className='mb-6 text-[#74787C] text-base'>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.
                                    <a href="..." className='text-[#FE5D37] hover:text-[#cb3f1f]'>Download Now</a>.
                                </p>
                                <form>
                                    <div className='grid gap-4'>
                                        <div className='px-2 col-span-12 md:col-span-6'>
                                            <input type="text" placeholder='Your Name' className='w-full py-4 px-3 border-0 rounded-[10px] text-[#3a3c3e]' />
                                        </div>
                                        <div className='px-2 col-span-12 md:col-span-6 w-full'>
                                            <input type="email" placeholder='Your Email' className='w-full py-4 px-3 border-0 rounded-[10px] text-[#3a3c3e]' />
                                        </div>
                                        <div className='px-2 col-span-12'>
                                            <input type="text" placeholder='Subject' className='w-full py-4 px-3 border-0 rounded-[10px] text-[#3a3c3e]' />
                                        </div>
                                        <div className='px-2 col-span-12'>
                                            <textarea name="" id="" placeholder='Message' className='w-full h-[100px] py-4 px-3 border-0 rounded-[10px] text-[#3a3c3e]'></textarea>
                                        </div>
                                        <div className='px-2 col-span-12'>
                                            <button className='w-full py-4 rounded-[10px] text-base text-white bg-[#FE5D37]'>Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d432700.5826839158!2d-74.30079502441842!3d40.68259872071851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1737774555590!5m2!1sen!2sin" className='w-full h-full' style={{ borderRadius: "10px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
