import React from 'react';

const Nav = () => {
  return (
    <nav className='hidden lg:flex'>
      <ul className='flex items-center space-x-12 font-secondary '>
        <li className='nav-link'>
          <a href='#home'>Home</a>
        </li>
        <li className='nav-link'>
          <a href='#company'>Company</a>
        </li>
        <li className='nav-link'>
          <a href='#features'>Features</a>
        </li>
        <li className='btn'>
          <a href='#SignUp'>Sign Up</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
