import React from 'react'
import TeamData from './TeamData'
import CommonTeam from './CommonTeam'

// css link
import './team.css'

function Team() {
    return (
        <React.Fragment>
            <section id='team' className='pt-20 pb-24 wedding_planner'>
                <div className='container mx-auto px-5 md:px-10 lg:px-10'>
                    <div className='text-center'>
                        <h2 className='text-4xl lg:text-5xl mb-2'>Our Wedding Planner</h2>
                        <p className='text-xl'>A team of highly skilled professionals available to assist you</p>
                    </div>
                    <div className='mt-12'>
                        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-7'>
                            {TeamData.map((cvalue, index, array) => {
                                return (
                                    <CommonTeam
                                        key={index}
                                        id={cvalue.id}
                                        img={cvalue.img}
                                        title={cvalue.title}
                                        name={cvalue.name}
                                        para1={cvalue.para1}
                                        para2={cvalue.para2}
                                        para3={cvalue.para3}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Team
