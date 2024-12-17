// import React from 'react'

import { useParams } from 'react-router-dom';

// asset
import asset108 from '../../assets/asset 108.svg'
import asset109 from '../../assets/asset 109.jpeg'
import asset110 from '../../assets/asset 110.jpeg'

import BlogData from '../../Pages/Blogs/BlogData'

function FeaturDetails() {

    const { id } = useParams();
    const blog = BlogData.find((b) => b.id === parseInt(id, 10));

    if (!blog) {
        return <div>Blog not found!</div>;
    }

    return (
        <>
            <section className="container mx-auto px-5 md:px-10">
                <div className="py-[60px] text-center">
                    <div className="flex flex-col align-middle gap-y-2">
                        <h1 className="text-[45px] mb-5 w-[100%] max-w-[80%] mx-auto">{blog.title}</h1>
                        <div className="flex items-center space-x-2 align-middle justify-center">
                            <img src={asset108} alt="" />
                            <p className="text-[12px]">Apr 1, 2024</p>
                        </div>
                    </div>
                </div>
                <div className="mb-[150px]">
                    <div className="mb-10">
                        <img src={blog.img} alt="" className='rounded-md w-[100%] min-h-[600px] max-h-[600px] object-cover' />
                    </div>
                    <div className='w-[100%] max-w-[900px] mx-auto'>
                        <p className='text-sm text-stone-800'>Welcome to <a href="" className='underline hover:no-underline'>HiTech</a>, your ultimate destination for all things tech! Whether you&apos;re seeking the latest gadgets, expert advice, or simply want to stay updated on the ever-evolving world of technology, you&apos;ve come to the right place. Our platform offers a curated selection of cutting-edge electronics, insightful articles.</p>
                        <p className='mb-[10px]'>&zwj;</p>
                        <h3 className='mb-[10px] text-[28px]'>Unlock your potential with smart technology solutions</h3>
                        <ol className='list-decimal my-5 pl-[30px] text-stone-600'>
                            <li className='mb-[15px]'>Nibh libero condimentum duis turpis pretium molestie netus turpis</li>
                            <li className='mb-[15px]'>Turpis lacus sed sagittis mollis sitquam ipsum</li>
                            <li className='mb-[15px]'>Feugiat maurisac ultricies cursus sollicitudin acmauris</li>
                            <li className='mb-[15px]'>Arcu rutrum luctus libero elementum quis libero enim utgravida quis</li>
                            <li className='mb-[15px]'>Molestie sem cursus pulvinar euismod pulvinar nisi at nisi consequat integer neque arcu.</li>
                            <li className='mb-[15px]'>Consequat vulputate pellentesque cursus venenatis egestas.</li>
                        </ol>
                        <div>
                            <img src={asset109} alt="" />
                        </div>
                        <p className='mb-[10px]'>&zwj;</p>
                        <blockquote className='text-center border border-[#0003] rounded-md my-[15px] p-10 text-lg'>
                            Embrace the future of technology with our innovative products. From cutting-edge gadgets to smart solutions, we&apos;re here to elevate your digital experience. Join us on this journey and discover the endless possibilities that await.
                        </blockquote>
                        <p className='mb-[10px] text-stone-600 text-base'>
                            Odio augue morbi elementum lectus metus nec phasellus. Donec non auctor tellus nibh elementum nunc elementum. Aenean diam sed tincidunt urna. Vitae magna nam vitae mauris. Pellentesque lacus eget mattis gravida elementum nisi vestibulum. Morbi lectus massa in cras cursus id scelerisque tincidunt.
                        </p>
                        <p className='mb-[10px]'>&zwj;</p>
                        <h4 className='mb-[10px] text-[22px]'>Stay connected with our range of high-quality products</h4>
                        <p className='mb-[10px] text-stone-600 text-base'>
                            Sollicitudin feugiat nisl, lorem interdum pellentesque. Massa, scelerisque in placerat rutrum hac scelerisque habitasse. Amet ultricies massa nec, ornare faucibus facilisi quisque leo iaculis. Velit consequat in aliquet ullamcorper tristique pulvinar adipiscing sem. Imperdiet augue cras pretium at lectus congue leo feugiat. Eget sit nunc nullam fringilla ut sem eget quis.
                        </p>
                        <ul className='my-5 pl-[30px] text-stone-600 list-disc'>
                            <li className='mb-[15px]'>Sit vulputate aliquam cras aliquam etnibh congue consequat pellentesque</li>
                            <li className='mb-[15px]'>Vestibulum massa aliquet odio mauris duis amet nsed dapibus porta est amet</li>
                            <li className='mb-[15px]'>Urna augue arcu duis eget proin sed morbi purus sit nunc sodales aliquam</li>
                            <li className='mb-[15px]'>Netus nunc risus interdum feugiat et nunc pellentesque mus.</li>
                            <li className='mb-[15px]'>Egestas vitae orci mauris a donec convallis volutpat ac.</li>
                        </ul>
                        <div>
                            <img src={asset110} alt="" />
                        </div>
                        <p className='mb-[10px]'>&zwj;</p>
                        <h5 className='mb-[10px] text-lg'>Experience convenience and efficiency with our tech accessories</h5>
                        <p className='mb-[10px] text-stone-600 text-base'>
                            Ac amet turpis ornare rhoncus. Sed sed ornare elit ut commodo feugiat commodo faucibus purus. Vitae sapien purus id eget neque nulla posuere pellentesque turpis. Aliquam hac amet rhoncus velit vel vitae. Sed lacinia neque amet quis lectus. Pharetra ut volutpat mauris et turpis volutpat eu nisl. A lectus nisi posuere egestas maecenas nulla.
                        </p>
                        <p className='mb-[10px]'>&zwj;</p>
                        <h6 className='mb-[10px] text-base'>Transform your home into a smart haven explore our smart home solutions</h6>
                        <p className='mb-[10px] text-stone-600 text-base'>
                            Lobortis penatibus pharetra penatibus nunc morbi ut pulvinar odio nunc. Blandit non a nec leo quis posuere auctor. Amet nunc cras ut at. Gravida sit tempor dictumst odio eu nec blandit non.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturDetails
