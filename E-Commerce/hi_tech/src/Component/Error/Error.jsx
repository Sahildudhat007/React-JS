// import React from 'react'

// assets
import asset114 from '../../assets/asset114.svg'

function Error() {
    return (
        <>
            <section className="px-5 md:px-10 flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
                <div className="text-center flex flex-col w-[100%] max-w-[600px] align-middle">
                    <img src={asset114} alt="" className='max-w-[100%]' />
                    <div className='mt-[50px] text-sm'>
                        <h2 className='mb-[10px] text-4xl'>We lost that page...</h2>
                        <p>Sorry, the page you are looking for doesn&apos;t exit or has been moved.</p>
                    </div>
                    <div className='justify-center align-middle mt-10'>
                        <button className='text-sm py-3 px-[26px] border border-black rounded-full hover:bg-black hover:text-white transition'>Back to Home</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Error
