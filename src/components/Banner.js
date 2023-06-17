import React from 'react';
import Users from './Users';
import Img from '../assets/img/banner-img.png';

const Banner = () => {
  return (
    <section className='min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center lg:flex-row'>
          {/* text */}
          <div>
            <h1
              className='text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug'
              data-aos='fade-down'
              data-aos-delay='300'
            >
              Let’s Explore Three-Dimensional visual
            </h1>
            <p
              className='font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0'
              data-aos='fade-down'
              data-aos-delay='200'
            >
              With virtual technology you can see the digital world feel more
              real and you can play the game with a new style.
            </p>
            {/* buttons */}
            <div
              data-aos='fade-down'
              data-aos-delay='300'
              className='flex items-center max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:max-w-none lg:justify-start space-x-5 justify-around'
            >
              <button className='btn'>Get it Now</button>
              <a
                className='border-b-2 border-transparent hover:border-white transition ease-out'
                href='#exlore'
              >
                Explore Device
              </a>
            </div>
            <Users />
          </div>
          {/* image */}
          <div data-aos='fade-up' data-aos-delay='300'>
            <img src={Img} alt='bannerImage' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
