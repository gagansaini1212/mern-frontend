import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

import Base from '../core/Base';
import { getCategories, createProduct } from './helper/adminapicall';
import { isAuthenticated } from '../auth/helper';

const AddProduct = () => {
  const { user, token } = isAuthenticated();
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    photo: '',
    categories: [],
    category: '',
    loading: false,
    error: '',
    createdProduct: '',
    getARedirect: false,
    formData: '',
  });

  const {
    name,
    description,
    stock,
    price,
    photo,
    categories,
    category,
    error,
    createdProduct,
    formData,
  } = values;

  const preload = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, categories: data, formData: new FormData() });
        console.log('categories', categories);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: '', loading: true });
    createProduct(user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: '',
          description: '',
          price: '',
          photo: '',
          stock: '',
          loading: false,
          createdProduct: data.name,
        });
      }
    });
  };

  const handleChange = (name) => (event) => {
    const value = name === 'photo' ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const successMessage = () => {
    return (
      <div
        className="alert alert-success mt-3"
        style={{ display: createdProduct ? '' : 'none' }}
      >
        <h4>{createProduct} create successfully</h4>
      </div>
    );
  };

  const warningMessage = () => {
    if (error) {
      return <h4 className="text-success">Failed to create product!</h4>;
    }
  };

  const createProductForm = () => (
    <form>
      <span>Post photo</span>
      <div className="form-group">
        <label className="btn btn-block btn-success">
          <input
            onChange={handleChange('photo')}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
          />
        </label>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange('name')}
          name="photo"
          className="form-control my-4"
          placeholder="Name"
          value={name}
        />
      </div>
      <div className="form-group">
        <textarea
          onChange={handleChange('description')}
          name="photo"
          className="form-control my-4"
          placeholder="Description"
          value={description}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange('price')}
          type="number"
          className="form-control my-4"
          placeholder="Price"
          value={price}
        />
      </div>
      <div className="form-group">
        <select
          value={category}
          onChange={handleChange('category')}
          className="form-control my-4"
          placeholder="Category"
        >
          <option>Select</option>
          {categories &&
            categories.map((category, index) => (
              <option key={index} value={category._id}>
                {category.name}
              </option>
            ))}
        </select>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange('stock')}
          type="number"
          className="form-control my-4"
          placeholder="Quantity"
          value={stock}
        />
      </div>

      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-success my-4"
      >
        Create Product
      </button>
    </form>
  );
  return (
    <Base
      title="Add a product here!"
      description="Welcome to product creation section"
      className="container bg-info p-4"
    >
      <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
        Admin home
      </Link>
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {warningMessage()}
          {createProductForm()}
        </div>
      </div>
    </Base>
  );
};

export default AddProduct;
