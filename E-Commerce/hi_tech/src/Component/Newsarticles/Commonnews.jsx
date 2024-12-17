// import React from 'react'

import propTypes from 'prop-types'

function Commonnews({ id, img, date, title }) {
    return (
        <>
            <section>
                <div>
                    <a href="/" id={id}>
                        <div>
                            <img src={img} alt="" className="rounded-md" />
                        </div>
                        <div className="mt-4">
                            <p className="text-xs">{date}</p>
                            <h2 className="mt-2 text-xl">{title}</h2>
                        </div>
                    </a>
                </div>
            </section>
        </>
    )
}

Commonnews.propTypes = {
    img: propTypes.string,
    date: propTypes.string,
    title: propTypes.string,
    id: propTypes.number
}


export default Commonnews
