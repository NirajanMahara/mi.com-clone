import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { logo } from '../data/data.json';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='logo'>
        <Link to='/'>
          <img id='logoImage' src={logo} alt='Logo' />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
