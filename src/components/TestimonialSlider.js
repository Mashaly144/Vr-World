import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/dist/js/swiper';
import 'swiper/dist/css/swiper.css';

import {slider} from '../data'

const TestimonialSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {slider.map((slide, index) => {
        const { message, image, name, email } = slide;
        return (
          <SwiperSlide
            key={index}
            className='rounded-lg min-h-[240px] bg-gradient-to-t from-[#130613] via-[#2a1428] to-[#331a35] flex-col flex justify-center items-center space-y-6 lg:space-y-0 p-3'
          >
            <p className='min-h-[100px] text-[15px]'>{message}</p>
            {/* avater details */}
            <div className='flex flex-row gap-x-4 self-start items-center'>
              {/* image */}
              <div className='w-14'>
                <img src={image} alt='name' />
              </div>
              {/* desciption */}
              <div>
                <div className='font-medium text-base'>{name}</div>
                <div className='font-medium text-rose-600'>{email}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
