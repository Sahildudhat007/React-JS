import React from 'react'
import CommonFaciliti from './CommonFaciliti'
import FacilitiesData from './FacilitiesData'

function Facilities() {
    return (
        <>
            <div className='container mx-auto py-12'>
                <div className='px-3'>
                    <div className='text-center mb-12 mx-auto max-w-[600px]'>
                        <h1 className='mb-4 text-[2.5rem] font-bold' style={{ color: "#103741", fontFamily: "Lobster Two, cursive" }}>School Facilities</h1>
                        <p className='mb-4 text-[#74787C]'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        FacilitiesData.map((item, ind) => {
                            return (
                                <CommonFaciliti
                                    key={ind}
                                    icon={item.icon}
                                    name={item.name}
                                    pera={item.pera}
                                    bgColor={item.bgColor}
                                    textColor={item.textColor}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Facilities
