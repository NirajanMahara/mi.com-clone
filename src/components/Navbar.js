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

      <Link className="navLinks" to="/#miphones">Mi Phones</Link>
      <Link className="navLinks" to="/#redmiphones">Redmi Phones</Link>
      <Link className="navLinks" to="/#tv">TV</Link>
      <Link className="navLinks" to="/#laptops">Laptops</Link>
      <Link className="navLinks" to="/#lifestyle">Fitness & Lifestyle</Link>
      <Link className="navLinks" to="/#home">Home</Link>
      <Link className="navLinks" to="/#audio">Radio</Link>
      <Link className="navLinks" to="/#accessories">Accessories</Link>
    </div>
  );
};

export default Navbar;
