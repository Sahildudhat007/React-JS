import React from 'react'

// assets
import asset13 from '../../assets/asset 13.jpeg'

function Appointment() {
    return (
        <>
            <div className='container mx-auto px-3 py-12'>
                <div className='container lg:px-3'>
                    <div className='bg-[#FFF5F3] rounded-[10px]'>
                        <div className='grid grid-cols-1 lg:grid-cols-2'>
                            <div className=''>
                                <div className='flex flex-col justify-center p-10 lg:p-12'>
                                    <h1 className='mb-6 text-[1.5rem] md:text-[2.5rem] font-bold text-[#103741]' style={{ fontFamily: "Lobster Two, cursive" }}>Make Appointment</h1>
                                    <form>
                                        <div className='grid gap-4'>
                                            <div className='col-span-12 md:col-span-6 mt-4 px-2'>
                                                <input type="text" placeholder='Gurdian Name' className='w-full py-4 px-3 text-[#74787C] text-base rounded-[10px] outline-orange-100' />
                                            </div>
                                            <div className='col-span-12 md:col-span-6 mt-4 px-2'>
                                                <input type="text" placeholder='Gurdian Email' className='w-full py-4 px-3 text-[#74787C] text-base rounded-[10px] outline-orange-100' />
                                            </div>
                                            <div className='col-span-12 md:col-span-6 mt-4 px-2'>
                                                <input type="text" placeholder='Child Name' className='w-full py-4 px-3 text-[#74787C] text-base rounded-[10px] outline-orange-100' />
                                            </div>
                                            <div className='col-span-12 md:col-span-6 mt-4 px-2'>
                                                <input type="text" placeholder='Child Age' className='w-full py-4 px-3 text-[#74787C] text-base rounded-[10px] outline-orange-100' />
                                            </div>
                                            <div className='col-span-12 mt-4 px-2'>
                                                <textarea name="message" id="message" placeholder='Message' className='h-[100px] w-full py-4 px-3 text-[#74787C] text-base rounded-[10px] outline-orange-100'></textarea>
                                            </div>
                                            <div className='col-span-12 mt-4 px-2'>
                                                <button className='text-white py-4 bg-[#FE5D37] w-full rounded-[10px] outline-orange-100'>Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className=''>
                                <img src={asset13} alt="" className='rounded-[10px] w-[100%] h-[100%] object-cover' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Appointment
