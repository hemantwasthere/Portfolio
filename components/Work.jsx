import React from 'react';
// import WorkImg from '../public/workImg.jpeg';
// import realEstate from '../public/realestate.jpg';
import Link from 'next/link';

const Work = () => {
    return (
        <div name='work' className='w-full pt-8 sm:pt-0 md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-2'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Work
                    </p>
                    <p className='py-6'>&#x2f;&#x2f; Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Grid Item */}
                    <div className="shadow-lg bg-[url('../public/TextUtils.png')] shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ">
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <Link passHref href='https://hemant-0000.github.io/TextUtils/'>
                                    <a target='_blank'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                            Demo
                                        </button>
                                    </a>
                                </Link>
                                <Link passHref href='https://github.com/Hemant-0000/TextUtils'>
                                    <a target='_blank'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                            Code
                                        </button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* Grid Item */}
                    <div className="shadow-lg bg-[url('../public/NewsMonkey.png')] shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ">
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                {/* <Link passHref href='https://hemant-0000.github.io/TextUtils/'>
                                    <a target='_blank'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                            Demo
                                        </button>
                                    </a>
                                </Link> */}
                                <Link passHref href='https://github.com/Hemant-0000/NewsMonkey'>
                                    <a target='_blank'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                            Code
                                        </button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}
                    <div className="shadow-lg bg-[url('../public/hulu.png')] shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ">
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Next JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <Link passHref href='https://hulu-three-omega.vercel.app/?genre=fetchTrending'>
                                    <a target='_blank'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                            Demo
                                        </button>
                                    </a>
                                </Link>
                                <Link passHref href='https://github.com/Hemant-0000/hulu'>
                                    <a target='_blank'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                            Code
                                        </button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}
                    <div className="shadow-lg bg-[url('../public/image-gallery.png')] shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ">
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <Link passHref href='https://image-gallery-eosin-three.vercel.app/'>
                                    <a target='_blank'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                            Demo
                                        </button>
                                    </a>
                                </Link>
                                <Link passHref href='https://github.com/Hemant-0000/Image-Gallery'>
                                    <a target='_blank'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                            Code
                                        </button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Work;