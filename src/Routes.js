import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminRoute from './auth/helper/AdminRoutes';
import PrivateRoute from './auth/helper/PrivateRoutes';

import Home from './core/Home';
import Signin from './user/Signin';
import Signup from './user/Signup';
import UserDashBoard from './user/UserDashBoard';
import AdminDashBoard from './user/AdminDashBoard';

const RoutesPath = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/Signin" exact element={<Signin />} />
        <Route exact path="/user/dashboard" element={<PrivateRoute />}>
          <Route exact path="/user/dashboard" element={<UserDashBoard />} />
        </Route>
        <Route exact path="/admin/dashboard" element={<AdminRoute />}>
          <Route exact path="/admin/dashboard" element={<AdminDashBoard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutesPath;
