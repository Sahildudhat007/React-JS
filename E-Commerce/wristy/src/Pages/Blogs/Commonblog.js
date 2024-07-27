import React from 'react'

function Commonblog({ img, para, title, written }) {
    return (
        <div>
            <div className='w-dyn-list'>
                <div className='post-list'>
                    <div className="post">
                        <div className='img-box'>
                            <a href="">
                                <img src={img} alt="" className='post-img' />
                            </a>
                        </div>
                        <div className="mt-3">
                            <p className='mb-2'>
                                <a href="#" className='text-xs'>{title}</a>
                            </p>
                            <p className='mb-4'>
                                <a href="#" className='text-lg'>{para}</a>
                            </p>
                            <a href="#" className='text-xs'>{written}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commonblog
