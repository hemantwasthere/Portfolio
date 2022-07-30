import React, { useState } from 'react';
import {
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaTwitter
} from 'react-icons/fa';
import { RiMenu4Line } from 'react-icons/ri'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <header>
            <nav className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50'>
                <Link href='/' to='home' smooth={true} duration={500}>
                    <div className='hemant text-3xl text-pink-600 cursor-pointer'>
                        Hemant
                    </div>
                </Link>

                {/* menu */}
                <ul className='hidden md:flex'>
                    <Link href='/' to='home' smooth={true} duration={500}>
                        <li className='hover:text-pink-500 duration-300'>
                            Home
                        </li>
                    </Link>

                    <Link href='/' to='about' smooth={true} duration={500}>
                        <li className='hover:text-pink-500 duration-300'>
                            About
                        </li>
                    </Link>

                    <Link href='/' to='skills' smooth={true} duration={500}>
                        <li className='hover:text-pink-500 duration-300'>
                            Skills
                        </li>
                    </Link>

                    <Link href='/' to='work' smooth={true} duration={500}>
                        <li className='hover:text-pink-500 duration-300'>
                            Work
                        </li>
                    </Link>

                    <Link href='/' to='contact' smooth={true} duration={500}>
                        <li className='hover:text-pink-500 duration-300'>
                            Contact
                        </li>
                    </Link>

                </ul>

                {/* Hamburger */}
                <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                    {!nav ? <RiMenu4Line className='font-extrabold text-3xl' /> : <FaTimes className='font-extrabold text-3xl' />}
                </div>

                {/* Mobile menu */}
                <ul
                    className={
                        !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'} >
                    <li className='py-6 text-4xl'>
                        <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        {' '}
                        <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        {' '}
                        <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        {' '}
                        <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                            Work
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        {' '}
                        <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Social icons */}
                <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                    <ul>
                        <a href='https://www.linkedin.com/in/hemant0000' rel="noreferrer" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
                            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                                Linkedin <FaLinkedin size={30} />
                            </li>
                        </a>
                        <a href='https://github.com/hemantwasthere' rel="noreferrer" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
                            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                                Github <FaGithub size={30} />
                            </li>
                        </a>
                        <a href='https://www.twitter.com/hemantwasthere' rel="noreferrer" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
                            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1D9BF0]'>
                                Twitter <FaTwitter size={30} />
                            </li>
                        </a>
                        <a href="mailto:hemant.is.there@gmail.com" rel="noreferrer" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
                            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                                Email <HiOutlineMail size={30} />
                            </li>
                        </a>
                        <a href='https://drive.google.com/file/d/155K-57Tvm4Dc6FKsLo1O5aRFoZ58FOt6/view?usp=sharing' rel="noreferrer" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
                            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                                Resume <BsFillPersonLinesFill size={30} />
                            </li>
                        </a>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;