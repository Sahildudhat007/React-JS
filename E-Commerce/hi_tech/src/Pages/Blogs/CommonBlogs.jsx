// import React from 'react'

import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

function CommonBlogs({ id, img, date, title }) {
    return (
        <>
            <section>
                <div>
                    <Link to={`/featurDetails/${id}`}>
                        <div>
                            <img src={img} alt="" className="rounded-md" />
                        </div>
                        <div className="mt-4">
                            <p className="text-xs">{date}</p>
                            <h2 className="mt-2 text-xl font-normal">{title}</h2>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    )
}

CommonBlogs.propTypes = {
    img: propTypes.string,
    date: propTypes.string,
    title: propTypes.string,
    id: propTypes.number
}

export default CommonBlogs
