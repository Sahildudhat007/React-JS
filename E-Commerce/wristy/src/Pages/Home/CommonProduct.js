// import React from 'react'

// function CommonProduct({ img, product, rate }) {
//     return (
//         <div>
//             <div className='w-dyn-list'>
//                 <div className='post-list'>
//                     <div className="post">
//                         <div className='img-box'>
//                             <a href="">
//                                 <img src={img} alt="" className='post-img' />
//                             </a>
//                         </div>
//                         <div className="mt-3">
//                             <p className='mb-2'>
//                                 <a href="#" className=''>{product}</a>
//                             </p>
//                             <p className='mb-4'>
//                                 <a href="#" className='text-sm'>{rate}</a>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CommonProduct


import React from "react";

import { Link } from "react-router-dom";

function CommonProduct({ img, product, rate , id}) {
  return (
    <div>
      <Link to={`/productDetails/${id}`}>
        <div className="w-dyn-list">
          <div className="post-list">
            <div className="post">
              <div className="img-box">
                {/* <a href=".."> */}
                  <img src={img} alt="" className="post-img" />
                {/* </a> */}
              </div>
              <div className="mt-3">
                <p className="mb-2">
                  {/* <a href=".." className=""> */}
                    {product}
                  {/* </a> */}
                </p>
                <p className="mb-4">
                  {/* <a href=".." className="text-sm"> */}
                    {rate}
                  {/* </a> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CommonProduct;