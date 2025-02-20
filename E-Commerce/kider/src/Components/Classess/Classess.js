import React from 'react'
import ClassesData from './ClassessData'
import CommonClasses from './CommonClassess'

function Classess() {
    return (
        <>
            <div className='container mx-auto px-3 py-12'>
                <div className='container lg:px-3'>
                    <div className='text-center mx-auto max-w-[600px] mb-12'>
                        <h1 className='mb-4 font-bold text-[2.5rem] text-[#103741]' style={{ fontFamily: "Lobster Two, cursive" }}>School Classes</h1>
                        <p className='mb-4 text-[#74787C]'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            ClassesData.map((item, ind) => {
                                return (
                                    <CommonClasses
                                        key={ind}
                                        img={item.img}
                                        title={item.title}
                                        profile={item.profile}
                                        name={item.name}
                                        job={item.job}
                                        doller={item.doller}
                                        age={item.age}
                                        time={item.time}
                                        kids={item.kids}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Classess
