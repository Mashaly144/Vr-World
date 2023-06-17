import React from 'react';
import { BsInstagram, BsLinkedin, BsYoutube, BsFacebook } from 'react-icons/bs';
const Footer = () => {
  return (
    <footer className='py-10'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center flex-col lg:flex-row space-y-4 lg:space-y-0'>
          {/* text */}
          <h2 className='font-semibold'>
            Made By <span className='social'>Abdallah Mashaly</span>
          </h2>
          {/* social icon */}
          <div className='flex items-center space-x-4 text-2xl'>
            <a
              href='https://www.instagram.com/mashalyabdallah/'
              target='blank'
              className='social'
            >
              <BsInstagram className='text-2xl cursor-pointer ' />
            </a>
            <a
              className='social'
              href='https://www.linkedin.com/in/abdallah-mashaly-797482250/'
              target='blank'
            >
              <BsLinkedin className='social text-2xl cursor-pointer' />
            </a>
            <a
              className='social'
              href='https://www.youtube.com/channel/UCeVSDHjRKk-rsnQlXcSksAg'
              target='blank'
            >
              <BsYoutube className='text-2xl cursor-pointer social' />
            </a>
            <a
              className='social'
              href='https://www.facebook.com/Abdallah.Mashaly.456'
              target='blank'
            >
              <BsFacebook className='text-2xl cursor-pointer social' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
