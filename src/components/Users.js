import React from 'react';
import Avater1 from '../assets/img/avt1.png';
import Avater2 from '../assets/img/avt2.png';
import Avater3 from '../assets/img/avt3.png';
import Avater4 from '../assets/img/avt4.png';
import { BsFillCircleFill } from 'react-icons/bs';

const Users = () => {
  return (
    <div
      data-aos='zoom-in'
      data-aos-delay='100'
      className='flex items-center justify-center lg:space-y-0 lg:space-x-4 lg:justify-start flex-col lg:flex-row space-y-2 '
    >
      {/* avatars */}
      <div className='flex items-center -space-x-5 max-w-[200px]'>
        <div className='w-12 h-12 rounded-full'>
          <img src={Avater1} alt='avater' />
        </div>
        <div className='w-12 h-12 rounded-full'>
          <img src={Avater2} alt='avater' />
        </div>
        <div className='w-12 h-12 rounded-full'>
          <img src={Avater3} alt='avater' />
        </div>
        <div className='w-12 h-12 rounded-full'>
          <img src={Avater4} alt='avater' />
        </div>
      </div>
      {/* icons */}
      <div className='flex items-center space-x-2'>
        <BsFillCircleFill className='text-xs text-green-500 animate-pulse' />
        <span className='font-medium font-secondary'>400k people online</span>
      </div>
    </div>
  );
};

export default Users;
