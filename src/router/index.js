import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const App = () => {
  <BrowserRouter>
    <div>
      <Route exact path='/' component={PageOne} />
      <Route exact path='/pageTwo' component={PageTwo} />
    </div>
  </BrowserRouter>;
};
