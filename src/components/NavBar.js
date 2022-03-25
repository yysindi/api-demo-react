import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import logo from '../assets/logo.svg';
import DarkModeToggle from 'react-dark-mode-toggle';

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <div class='navbar'>
      <Link to='/'>
        <img src={logo} />
      </Link>
      <Link to='/card'>Cards</Link>
      <Link to='/transactions'>Transactions</Link>
      <Link to='/fundingsource'>Funding</Link>
      <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={80} />
      <a href='https://lithic.com' target='_blank' rel='noreferrer'>
        {' '}
        Learn More{' '}
      </a>
      <a href='https://docs.lithic.com' target='_blank' rel='noreferrer'>
        {' '}
        API Docs{' '}
      </a>
    </div>
  );
};

export default NavBar;
