import React from 'react'

const Slotmachine = ({x,y,z}) => {
    let text = " ";
    if (x === y && y === z) {
            text = "This is Matching";
    }
    else {
            text = "This is Not Matching";
    }
    return (
        <div className='py-5'>
            <h1 className='text-3xl'> {x} {y} {z} </h1>
            <p>{text}</p>
        </div>
        
    )
}

export default Slotmachine