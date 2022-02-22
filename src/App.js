import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './views/HomePage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path='/' component={NavBar} />
          {/* <Route path='/pageTwo' component={PageTwo} /> */}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
