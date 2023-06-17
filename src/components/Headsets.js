import React from 'react';
import HeadsetItem from './HeadsetItem';

const Headsets = () => {
  return (
    <section className='py-10'>
      <div className='container mx-auto'>
        <h2
          data-aos='fade-up'
          data-aos-offset='100'
          className='text-3xl font-bold mb-10'
        >
          Mixed Reality Headsets
        </h2>

        {/* All items */}
        <HeadsetItem />
      </div>
    </section>
  );
};

export default Headsets;
