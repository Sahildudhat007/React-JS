import React from 'react'

function CommonClasses({ id, img, title, profile, name, job, doller, time, kids }) {
    return (
        <>
            <div className=''>
                <div>
                    <div className='bg-[#FFF5F3] rounded-full p-4 mx-auto w-[75%]'>
                        <img src={img} alt="" className='rounded-full' />
                    </div>
                    <div className='bg-[#FFF5F3] rounded-[10px] p-6 pt-12 -mt-12'>
                        <a href="..." className='block text-center mt-4 mb-6 font-bold text-[1.5rem] text-[#103741]' style={{ fontFamily: "Lobster Two, cursive" }}>{title}</a>
                        <div className='flex items-center justify-between mb-6'>
                            <div className='flex items-center'>
                                <img src={profile} alt="" className='w-[45px] h-[45px] rounded-full' />
                                <div className='ml-4'>
                                    <h6 className='mb-1 text-[#FE5D37] font-semibold text-base'>{name}</h6>
                                    <small className='text-[#74787C]'>{job}</small>
                                </div>
                            </div>
                            <div>
                                <span className='bg-[#FE5D37] text-white py-2 px-4 rounded-full'>{doller}</span>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 gap-1'>
                            <div className='px-[0.12] mt-1'>
                                <div className='border-t-2 border-[#FE5D37] pt-2'>
                                    <h6 className='text-[#FE5D37] mb-1 font-semibold text-base'>age:</h6>
                                    <small className='text-[#74787C] font-medium'>3-5 Years</small>
                                </div>
                            </div>
                            <div className='px-[0.12] mt-1'>
                                <div className='border-t-2 border-[#198754] pt-2'>
                                    <h6 className='text-[#198754] mb-1 font-semibold text-base'>time:</h6>
                                    <small className='text-[#74787C] font-medium'>{time}</small>
                                </div>
                            </div>
                            <div className='px-[0.12] mt-1'>
                                <div className='border-t-2 border-[#ffc107] pt-2'>
                                    <h6 className='text-[#ffc107] mb-1 font-semibold text-base'>Capacity:</h6>
                                    <small className='text-[#74787C] font-medium'>{kids}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommonClasses
