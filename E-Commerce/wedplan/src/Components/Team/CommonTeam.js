import React from 'react'

function CommonTeam({ id, img, title, name, para1, para2, para3 }) {
    return (
        <React.Fragment>
            <section className=''>
                <div className="bg-white p-5">
                    <div className=''>
                        <img src={img} alt="" className='' />
                    </div>
                    <div className='mt-4'>
                        <p className='text-xs leading-[30px]'>{title}</p>
                    </div>
                    <div className='mb-2'>
                        <h2 className='text-xl'>{name}</h2>
                    </div>
                    <div>
                        <a href="..." className='text-xs'>{para1} -</a>
                        <a href="..." className='text-xs'>{para2} -</a>
                        <a href="..." className='text-xs'>{para3}</a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default CommonTeam
