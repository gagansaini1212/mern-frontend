import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './core/Home';
import Signin from './user/Signin';
import Signup from './user/Signup';

const RoutesPath = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/Signin" exact element={<Signin />} />
      </Routes>
    </Router>
  );
};

export default RoutesPath;
