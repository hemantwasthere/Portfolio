import React from 'react'
import {
    FaTimes,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Contact = () => {
    return (
        <div name='contact' className='w-full pt-14 bg-[#0a192f] flex justify-center items-center p-4 flex-col'>
            <form method='POST' action="https://getform.io/f/f8fb7153-7aca-4201-93b0-16c4ce335940" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>&#x2f;&#x2f; Submit the form below or shoot me an email - myemail@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let’s Collaborate</button>
            </form>
            <div className='lg:hidden mx-auto mt-5 -mb-3'>
                <ul className='flex space-x-6'>
                    <li className='flex flex-col cursor-pointer w-12 sm:w-20 group'>
                        <a href='https://www.linkedin.com/in/hemant0000' rel="noreferrer" target='_blank' className='items-center text-gray-400'>
                            <FaLinkedin className='h-8 mb-1 group-hover:animate-bounce group-hover:text-white' size={30} />
                            <p className='opacity-0 group-hover:opacity-100 tracking-widest text-white -ml-5'>LinkedIn</p>
                        </a>
                    </li>
                    <li className='flex flex-col cursor-pointer w-12 sm:w-20 hover:text-white group'>
                        <a href='https://github.com/Hemant-0000' rel="noreferrer" target='_blank' className='items-center text-gray-400'>
                            <FaGithub className='h-8 mb-1 group-hover:animate-bounce group-hover:text-white' size={30} />
                            <p className='opacity-0 group-hover:opacity-100 tracking-widest text-white -ml-3'>Github</p>
                        </a>
                    </li>
                    <li className='flex flex-col cursor-pointer w-12 sm:w-20 hover:text-white group'>
                        <a href='https://hrsmart2150@gmail.com' rel="noreferrer" target='_blank' className='items-center text-gray-400'>
                            <HiOutlineMail className='h-8 mb-1 group-hover:animate-bounce group-hover:text-white' size={30} />
                            <p className='opacity-0 group-hover:opacity-100 tracking-widest text-white -ml-2'>Email</p>
                        </a>
                    </li>
                    <li className='flex flex-col cursor-pointer w-12 sm:w-20 hover:text-white group'>
                        <a href='https://drive.google.com/file/d/17oMHUCGmtIlY7ojOIsQx2MqbfoJmJ_-S/view?usp=sharing' rel="noreferrer" target='_blank' className='items-center text-gray-400'>
                            <BsFillPersonLinesFill className='h-8 mb-1 group-hover:animate-bounce group-hover:text-white' size={30} />
                            <p className='opacity-0 group-hover:opacity-100 tracking-widest text-white -ml-4'>Resume</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact