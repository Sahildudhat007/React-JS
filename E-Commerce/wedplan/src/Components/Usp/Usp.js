import React from 'react'
import CommonUsp from './CommonUsp'
import UspData from './UspData'

// css 
import './usp.css'

function Usp() {
    return (
        <React.Fragment>
            <section id='usp' className='usp-section container mx-auto px-5 md:px-10 lg:px-10 py-28 grid md:grid-cols-1 lg:grid-cols-3 gap-16 bg-cover bg-center'>
                {UspData.map((cvalue, index, array) => {
                    return (
                        <CommonUsp
                            key={index}
                            id={cvalue.id}
                            img={cvalue.img}
                            number={cvalue.number}
                            title={cvalue.title}
                            para={cvalue.para}
                        />
                    )
                })}
            </section>
        </React.Fragment>
    )
}

export default Usp
