import React from "react"

function PropsCard(props) {
    return (
        <div>
            <div className="container mx-auto px-10">
                <div className='card border text-center w-[20rem] mt-12'>
                    <div className='card-header flex justify-center items-center bg-blue-500 py-7'>
                        <div className='card-img'>
                            <img src={props.image} alt='' className='h-32 rounded-full border-2 p-1'></img>
                        </div>
                    </div>
                    <div className='card-body px-5 pt-3 bg-white text-left'>
                        <h2 className='text-lg font-semibold'>Id : {props.id}</h2>
                        <h1 className='text-lg font-semibold'>Name : {props.name}</h1>
                        <p className='text-lg text-blue-500 font-medium'>Age : {props.age}</p>
                        <button className='bg-blue-500 text-white my-5 px-10 py-2 rounded-md text-lg'>{props.button}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropsCard