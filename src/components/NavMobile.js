import React from 'react';
import { IoClose } from 'react-icons/io5';

const NavMobile = ({ setnavMobile }) => {
  return (
    <nav className='lg:hidden bg-[#251f3f]/40 backdrop-blur-md w-full h-full backdrop:blur-sm'>
      <IoClose
        onClick={(e) => {
          setnavMobile(false);
        }}
        className='absolute top-6 left-4 cursor-pointer text-3xl'
      />
      <ul className='flex flex-col items-center justify-center h-full space-y-12 font-secondary '>
        <li className='text-xl '>
          <a href='#home'>Home</a>
        </li>
        <li className='text-xl'>
          <a href='#company'>Company</a>
        </li>
        <li className='text-xl'>
          <a href='#features'>Features</a>
        </li>
        <li className='btn'>
          <a href='#SignUp'>Sign Up</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
