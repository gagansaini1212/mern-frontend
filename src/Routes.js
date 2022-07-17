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
import ManageCategories from './admin/ManageCategories';
import UpdateProduct from './admin/UpdateProduct';
import UpdateCategory from './admin/UpdateCategory';
import Cart from './core/Cart';

const RoutesPath = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/signin" exact element={<Signin />} />
        <Route path="/cart" exact element={<Cart />} />
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
        <Route exact path="/admin/categories" element={<AdminRoute />}>
          <Route
            exact
            path="/admin/categories"
            element={<ManageCategories />}
          />
        </Route>
        <Route
          exact
          path="/admin/product/update/:productId"
          element={<AdminRoute />}
        >
          <Route
            exact
            path="/admin/product/update/:productId"
            element={<UpdateProduct />}
          />
        </Route>
        <Route
          exact
          path="/admin/category/update/:categoryId"
          element={<AdminRoute />}
        >
          <Route
            exact
            path="/admin/category/update/:categoryId"
            element={<UpdateCategory />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutesPath;
