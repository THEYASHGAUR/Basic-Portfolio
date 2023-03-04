import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link className='home' to="/">Home</Link>
      <Link className='about' to="/about">About</Link>
      <Link className='contact' to="/contact">Contact Us</Link>
      <Link className='servies' to="/services">Services</Link>
      <Link className='servies' to="/resume">Resume</Link>
      <Link className='servies' to="/skills">Skills</Link>
    </div>
  )
}

export default Navbar;
