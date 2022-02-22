import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import logo from '../assets/logo.svg';
const NavBar = () => {
  return (
    <div class='navbar'>
      <Link to='/'>
        <img src={logo} />
      </Link>
      <Link to='/card'>Cards</Link>
      <Link to='/transactions'>Transactions</Link>
      <Link to='/fundingsource'>Funding</Link>
    </div>
  );
};

export default NavBar;
