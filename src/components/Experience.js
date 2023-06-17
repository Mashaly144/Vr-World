import React from 'react';
// images
import experience1 from '../assets/img/exp-img1.png';
import experience2 from '../assets/img/exp-img2.png';

const Experience = () => {
  return (
    <section className='my-12 lg:my-[60px] '>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row min-h-[480px] lg:space-x-20'>
          {/* images */}
          <div className='flex-1 flex items-center lg:space-x-12 space-x-6 order-2 lg:order-1'>
            <div
              data-aos='fade-right'
              data-aos-offset='100'
              className='self-start'
            >
              <img src={experience1} alt='image1' />
            </div>
            <div
              data-aos='fade-left'
              data-aos-offset='100'
              className='self-end'
            >
              <img src={experience2} alt='image1' />
            </div>
          </div>
          {/* text */}
          <div className='flex flex-1 self-center  items-start flex-col space-y-10 pb-12 lg:pb-0 order-1 lg:order-2'>
            <h2
              className='font-bold text-3xl '
              data-aos='fade-up'
              data-aos-offset='50'
            >
              New Experience In Playing Game
            </h2>
            <p
              className='font-secandary'
              data-aos='fade-up'
              data-aos-offset='100'
            >
              You can try playing the game with a new style and of course a more
              real feel, like you are the main character in your game and
              adventure in this new digital world.
            </p>
            <button
              data-aos='fade-up'
              data-aos-offset='100'
              className='btn max-w-[160px]'
            >
              Get it Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
