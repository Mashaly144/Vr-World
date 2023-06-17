import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import NavMobile from './components/NavMobile';
import Experience from './components/Experience';
import Video from './components/Video';
import Headsets from './components/Headsets';
import About from './components/About';
import Explore from './components/Explore';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

// aos
import Aos from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  // handle animation
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 50,
    });
  }, []);
  // handle navmbile
  const [navMobile, setnavMobile] = useState(false);

  return (
    <div className='circle'>
      <Header setnavMobile={setnavMobile} />
      <Banner />
      {/* mobile nav */}
      <div
        className={`${
          navMobile ? 'right-0' : '-right-full'
        } fixed top-0 bottom-0 w-52 transition-all`}
      >
        <NavMobile setnavMobile={setnavMobile} />
      </div>
      <Experience />
      <Video />
      <Headsets />
      <Testimonial />
      <About />
      <Explore />
      <Footer />
    </div>
  );
};

export default App;
