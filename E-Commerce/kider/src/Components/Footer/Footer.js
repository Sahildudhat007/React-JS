import React from 'react'

// assets
import asset7 from '../../assets/asset 7.jpeg'
import asset8 from '../../assets/asset 8.jpeg'
import asset9 from '../../assets/asset 9.jpeg'
import asset10 from '../../assets/asset 10.jpeg'
import asset11 from '../../assets/asset 11.jpeg'
import asset12 from '../../assets/asset 12.jpeg'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='container mx-auto lg:px-3 bg-[#103741] text-[#ffffff80] pt-10 mt-12'>
                <div className='container'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 lg:gap-2 py-12'>
                        <div className='mt-12 px-3 lg:px-6'>
                            <h3 className='mb-6 font-bold text-[1.75rem] text-white' style={{ fontFamily: "Lobster Two, cursive" }}>Get In Touch</h3>
                            <p className='mb-2 text-base'>
                                <i className='fa fa-map-marker-alt mr-4'></i>
                                123 Street, New York, USA
                            </p>
                            <p className='mb-2 text-base'>
                                <i className='fa fa-phone mr-4'></i>
                                +012 345 67890
                            </p>
                            <p className='mb-2 text-base'>
                                <i className='fa fa-envelope mr-4'></i>
                                info@example.com
                            </p>
                            <div className='flex pt-2'>
                                <a href="..." className='mr-[5px] w-[45px] h-[45px] flex items-center justify-center border border-[#ffffff80] rounded-full text-white hover:bg-[#FE5D37] hover:border-[#FE5D37]'>
                                    <i className='fab fa-twitter'></i>
                                </a>
                                <a href="..." className='mr-[5px] w-[45px] h-[45px] flex items-center justify-center border border-[#ffffff80] rounded-full text-white hover:bg-[#FE5D37] hover:border-[#FE5D37]'>
                                    <i className='fab fa-facebook-f'></i>
                                </a>
                                <a href="..." className='mr-[5px] w-[45px] h-[45px] flex items-center justify-center border border-[#ffffff80] rounded-full text-white hover:bg-[#FE5D37] hover:border-[#FE5D37]'>
                                    <i className='fab fa-youtube'></i>
                                </a>
                                <a href="..." className='mr-[5px] w-[45px] h-[45px] flex items-center justify-center border border-[#ffffff80] rounded-full text-white hover:bg-[#FE5D37] hover:border-[#FE5D37]'>
                                    <i className='fab fa-linkedin-in'></i>
                                </a>
                            </div>
                        </div>
                        <div className='mt-12 px-3 lg:px-6'>
                            <h3 className='mb-6 font-bold text-[1.75rem] text-white' style={{ fontFamily: "Lobster Two, cursive" }}>Quick Links</h3>
                            <Link to="/aboutUs" className='mb-[5px] text-base flex items-center hover:text-[#FE5D37] hover:tracking-wider transition-all duration-200'>
                                <i className='fa fa-chevron-right text-[12px] mr-[10px]'></i>
                                About Us
                            </Link>
                            <Link to="/contactUs" className='mb-[5px] text-base flex items-center hover:text-[#FE5D37] hover:tracking-wider transition-all duration-200'>
                                <i className='fa fa-chevron-right text-[12px] mr-[10px]'></i>
                                Contact Us
                            </Link>
                            <Link to="/ourServices" className='mb-[5px] text-base flex items-center hover:text-[#FE5D37] hover:tracking-wider transition-all duration-200'>
                                <i className='fa fa-chevron-right text-[12px] mr-[10px]'></i>
                                Our Services
                            </Link>
                            <Link to="" className='mb-[5px] text-base flex items-center hover:text-[#FE5D37] hover:tracking-wider transition-all duration-200'>
                                <i className='fa fa-chevron-right text-[12px] mr-[10px]'></i>
                                Privacy Policy
                            </Link>
                            <a href="..." className='mb-[5px] text-base flex items-center hover:text-[#FE5D37] hover:tracking-wider transition-all duration-200'>
                                <i className='fa fa-chevron-right text-[12px] mr-[10px]'></i>
                                Terms & Condition
                            </a>
                        </div>
                        <div className='mt-12 px-3 lg:px-6'>
                            <h3 className='mb-6 font-bold text-[1.75rem] text-white' style={{ fontFamily: "Lobster Two, cursive" }}>Photo Gallery</h3>
                            <div className='grid grid-cols-3 pt-2 gap-1'>
                                <div className='mt-2 px-1'>
                                    <img src={asset7} alt="" className='rounded-[10px] bg-[#FFF5F3] p-1' />
                                </div>
                                <div className='mt-2 px-1'>
                                    <img src={asset8} alt="" className='rounded-[10px] bg-[#FFF5F3] p-1' />
                                </div>
                                <div className='mt-2 px-1'>
                                    <img src={asset9} alt="" className='rounded-[10px] bg-[#FFF5F3] p-1' />
                                </div>
                                <div className='mt-2 px-1'>
                                    <img src={asset10} alt="" className='rounded-[10px] bg-[#FFF5F3] p-1' />
                                </div>
                                <div className='mt-2 px-1'>
                                    <img src={asset11} alt="" className='rounded-[10px] bg-[#FFF5F3] p-1' />
                                </div>
                                <div className='mt-2 px-1'>
                                    <img src={asset12} alt="" className='rounded-[10px] bg-[#FFF5F3] p-1' />
                                </div>
                            </div>
                        </div>
                        <div className='mt-12 px-3 lg:px-6'>
                            <h3 className='mb-6 font-bold text-[1.75rem] text-white' style={{ fontFamily: "Lobster Two, cursive" }}>Newsletter</h3>
                            <p className='mb-[1rem] text-base'>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className='mx-auto flex flex-wrap p-1'>
                                <input type="text" placeholder='Your email' className='px-2 py-2 text-base border border-[#ffffff80] rounded-[10px] max-w-[170px] bg-transparent outline-0' />
                                <button className='text-white bg-[#FE5D37] py-[0.300rem] px-[0.75rem] rounded-[10px]'>SignUp</button>
                            </div>
                        </div>
                    </div>
                    <div className='container px-1 lg:px-3 mx-auto'>
                        <div className='py-[25px] text-[15px] grid md:grid-cols-2 md:items-center md:justify-between md:text-left text-center border-t border-[#ffffff1a]'>
                            <div className=''>
                                <div className='px-3'>© <a href="..." className='text-white border-b border-[#dee2e6] hover:text-[#FE5D37]'>Your Site Name</a>, All Right Reserved. Designed By <a href="..." className='text-white border-b border-[#dee2e6] hover:text-[#FE5D37]'>HTML Codex</a></div>
                            </div>
                            <div className='mt-3 md:mt-0'>
                                <div className='px-3 md:text-right'>
                                    <a href="..." className='mr-[15px] pr-[15px] text-white border-r border-[#ffffff1a] hover:text-[#FE5D37]'>Home</a>
                                    <a href="..." className='mr-[15px] pr-[15px] text-white border-r border-[#ffffff1a] hover:text-[#FE5D37]'>Cookies</a>
                                    <a href="..." className='mr-[15px] pr-[15px] text-white border-r border-[#ffffff1a] hover:text-[#FE5D37]'>Help</a>
                                    <a href="..." className='text-white hover:text-[#FE5D37]'>FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
