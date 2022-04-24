import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Links from 'next/link';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <header>
            <nav className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
                <div className='hemant text-3xl text-pink-600 font-'>
                    Hemant
                </div>

                {/* menu */}
                <ul className='hidden md:flex'>
                    <Links passHref href={'/'} to='home' smooth={true} duration={500}>
                        <li className='hover:text-pink-500 duration-300'>
                                Home
                        </li>
                    </Links>

                    <Links passHref href={'/about'} to='about' smooth={true} duration={500}>
                        <li className='hover:text-pink-500 duration-300'>
                                About
                        </li>
                    </Links>
                    
                    <Links passHref href={'/skills'} to='about' smooth={true} duration={500}>
                        <li className='hover:text-pink-500 duration-300'>
                                Skills
                        </li>
                    </Links>
                    
                    <Links passHref href={'/work'} to='about' smooth={true} duration={500}>
                        <li className='hover:text-pink-500 duration-300'>
                                Work
                        </li>
                    </Links>
                    
                    <Links passHref href={'/contact'} to='about' smooth={true} duration={500}>
                        <li className='hover:text-pink-500 duration-300'>
                                Contact
                        </li>
                    </Links>
                    
                </ul>

                {/* Hamburger */}
                <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                    {!nav ? <FaBars /> : <FaTimes />}
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
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                            <a href='https://www.linkedin.com/in/hemant0000' rel="noreferrer" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
                                Linkedin <FaLinkedin size={30} />
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                            <a href='https://github.com/Hemant-0000' rel="noreferrer" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
                                Github <FaGithub size={30} />
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                            <a href='https://www.linkedin.com/in/hemant0000' rel="noreferrer" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
                                Email <HiOutlineMail size={30} />
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                            <a href='https://drive.google.com/file/d/17oMHUCGmtIlY7ojOIsQx2MqbfoJmJ_-S/view?usp=sharing' rel="noreferrer" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
                                Resume <BsFillPersonLinesFill size={30} />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;