import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminRoute from './auth/helper/AdminRoutes';
import PrivateRoute from './auth/helper/PrivateRoutes';

import Home from './core/Home';
import Signin from './user/Signin';
import Signup from './user/Signup';
import UserDashBoard from './user/UserDashBoard';
import AdminDashBoard from './user/AdminDashBoard';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import ManageProducts from './admin/ManageProducts';
import ManageOrders from './admin/Orders';

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
        <Route exact path="/admin/create/category" element={<AdminRoute />}>
          <Route
            exact
            path="/admin/create/category"
            element={<AddCategory />}
          />
        </Route>
        <Route exact path="/admin/create/products" element={<AdminRoute />}>
          <Route exact path="/admin/create/products" element={<AddProduct />} />
        </Route>
        <Route exact path="/admin/products" element={<AdminRoute />}>
          <Route exact path="/admin/products" element={<ManageProducts />} />
        </Route>
        <Route exact path="/admin/orders" element={<AdminRoute />}>
          <Route exact path="/admin/orders" element={<ManageOrders />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutesPath;
