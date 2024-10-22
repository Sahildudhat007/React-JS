// import React from 'react'
import propTypes from 'prop-types'

function Category({ id, img, name }) {
    return (
        <>
            <div>
                <a id={id} href="/" className="flex flex-col items-center text-center space-y-3">
                    <img src={img} alt="" />
                    <p>{name}</p>
                </a>
            </div>
        </>
    )
}

Category.propTypes = {
    img: propTypes.string,
    name: propTypes.string,
    id: propTypes.number
}

export default Category
