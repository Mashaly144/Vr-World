import React from 'react';
// import TestimonialSlider from '../components/TestimonialSlider';

const Testimonial = () => {
  return (
    <section className=' mb-48 lg:mb-48'>
      <div className='container mx-auto'>
        <div className='bg-purple-400/10 max-h-[400px] p-12 rounded-lg'>
          {/* text */}
          <div className='text-center'>
            <h2
              data-aos='fade-right'
              data-aos-offset='100'
              className='text-3xl font-bold mb-6'
            >
              What our clients say
            </h2>
            <p data-aos='zoom-in'
              data-aos-offset='100' className='max-w-2xl mx-auto mb-12'>
              See what our customer say about us. It really matter for us. How
              good or bad we will make ir for evaluation to make EhyalLive
              better.
            </p>
          </div>
          {/* slider */}
          {/* <div data-aos='fade-up' data-aos-offset='100'>
            <TestimonialSlider />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
