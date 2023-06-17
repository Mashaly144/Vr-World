import React from 'react';
import emojione1 from '../assets/img/emojione1.png';
import emojione2 from '../assets/img/emojione2.png';
import emojione3 from '../assets/img/emojione3.png';
import emojione4 from '../assets/img/emojione4.png';
const About = () => {
  const aboutItems = [
    {
      img: emojione1,
      title: 'Be Sincere',
    },
    {
      img: emojione2,
      title: 'Stronger together',
    },
    {
      img: emojione3,
      title: 'Keep it simple',
    },
    {
      img: emojione4,
      title: 'Take intelligent riskse',
    },
  ];
  return (
    <section className=' mb-32'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center '>
          {/* text */}
          <div
            data-aos='fade-right'
            data-aos-offset='100'
            className='max-w-[600px]'
          >
            <h1 className='font-bold lg:text-5xl text-3xl mb-5'>
              Our company values culture
            </h1>
            <p>
              We specialize in creating visual identities for products and
              branda in your company.
            </p>
          </div>
          {/* emojes */}
          <div className='grid grid-cols-1 items-center lg:grid-cols-2 gap-6 mt-10 lg:mt-0'>
            {aboutItems.map((item, index) => {
              return (
                <div data-aos='fade-left'
                data-aos-offset='100' className='flex flex-col items-center' key={index}>
                  <div className=''>
                    <img src={item.img} alt={item.title} />
                  </div>
                  <span className='text-white '>{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
