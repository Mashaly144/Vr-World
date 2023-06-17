import React, { useState } from 'react';

import { BsPlayCircleFill } from 'react-icons/bs';

const Video = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className='bg-[#534686]/30 py-6'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-between'>
          <h1
            data-aos='fade-right'
            data-aos-offset='100'
            className='text-2xl font-semibold mb-8 lg:mb-0'
          >
            Awesome experiences with virtual reality world
          </h1>
          {/* video */}
          <div
            data-aos='fade-left'
            data-aos-offset='100'
            className='bg-videoBg bg-no-repeat bg-cover w-[270px] h-[180px] flex items-center justify-center'
          >
            <div onClose={() => setisOpen(!isOpen)} className='cursor-pointer'>
              <BsPlayCircleFill className='text-4xl text-white/80 hover:text-white hover:scale-110 transition' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
