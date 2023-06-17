import React from 'react';

import { headsetItems } from '../data';
const HeadsetItem = () => {
  return (
    <div className='grid gap-y-4 justify-center lg:grid-cols-2 lg:gap-9'>
      {headsetItems.map((item) => {
        return (
          // item
          <div
            data-aos='fade-up'
            data-aos-offset='100'
            data-aos-delay='50'
            className='relative'
            key={item.index}
          >
            <img src={item.img} alt={item.title} />
            <div className='absolute bottom-0 left-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6 '>
              <h4 className='font-semibold text-xl mb-2'>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeadsetItem;
