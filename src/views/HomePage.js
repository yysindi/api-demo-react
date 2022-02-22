import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';
const HomePage = () => {
  return (
    <div class='home'>
      <div class='section'>
        <div class='header'>
          <Link to='/card'>
            <h2>Cards</h2>
          </Link>
        </div>
      </div>
      <h1>Lithic Homepage!</h1>
    </div>
  );
};

export default HomePage;
