import React from 'react'

function CommonFaciliti({ id, icon, name, pera, bgColor, textColor }) {
    return (
        <>
            <div className='px-3 lg:px-6 mt-6'>
                <div className='flex flex-col justify-center'>
                    <div className='relative mx-auto my-auto w-[100px] h-[100px] rounded-full flex items-center justify-center' style={{ backgroundColor: bgColor }}>
                        <span className='absolute top-0 left-0 w-[15px] h-[30px] rounded-[50%]' style={{ backgroundColor: bgColor }}></span>
                        <i className='' style={{ color: textColor }}>{icon}</i>
                        <span className='absolute top-0 right-0 w-[15px] h-[30px] rounded-[50%]' style={{ backgroundColor: bgColor }}></span>
                    </div>
                    <div className='relative min-h-[250px] p-[30px] rounded-[100%] flex text-center justify-center flex-col' style={{ backgroundColor: bgColor }}>
                        <h3 className='mb-4 font-bold text-[1.75rem]' style={{ fontFamily: "Lobster Two, cursive", color: textColor }}>{name}</h3>
                        <p className='text-[#74787C]'>{pera}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommonFaciliti
