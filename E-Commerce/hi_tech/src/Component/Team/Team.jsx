// import React from 'react'

import CommonTeam from "./CommonTeam"
import TeamData from "./TeamData"

function Team() {
    return (
        <>
            <section className="container mx-auto px-5 mb-[80px] md:mb-[150px]">
                <div className="mb-6">
                    <div className="border-b pb-4 flex justify-between items-center">
                        <h2 className="text-3xl md:text-4xl">Meet Our Team</h2>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        TeamData.map((item, ind) => {
                            return (
                                <CommonTeam
                                    key={ind}
                                    id={item.id}
                                    img={item.img}
                                    title={item.title}
                                    name={item.name}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Team
