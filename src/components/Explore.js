import React from 'react';

const Explore = () => {
  return (
    <section className='min-h-[400px] mb-10 lg:mb-4'>
      <div className='container mx-auto h-full'>
        <div className='h-full bg-explore bg-no-repeat bg-cover p-14 flex flex-col items-start justify-center'>
          {/* text */}

          <h3
            data-aos='fade-right'
            data-aos-offset='100'
            data-aos-delay='100'
            className='text-3xl font-semibold mb-4'
          >
            Explore product in new way
          </h3>
          <p data-aos='fade-right' data-aos-offset='100' data-aos-delay='150'>
            We specialize in creating visual identities for products and branda
            in your company.
          </p>
          {/* form */}
          <form className='flex lg:flex-row flex-col gap-y-6 gap-x-6 w-full mt-4'>
            <input
              data-aos='fade-right'
              data-aos-offset='100'
              data-aos-delay='200'
              className='bg-gradient-to-t from-[#341D38] to-[#271223] h-12 px-4 outline-none rounded-md '
              type='text'
              placeholder='Your Email'
            />
            <button
              data-aos='fade-right'
              data-aos-delay='250'
              data-aos-offset='100'
              className='btn'
            >
              Start
            </button>
          </form>

          {/* image */}
        </div>
      </div>
    </section>
  );
};

export default Explore;
