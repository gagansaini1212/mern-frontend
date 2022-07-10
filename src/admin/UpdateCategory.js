import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { isAuthenticated } from '../auth/helper';
import Base from '../core/Base';
import { updateCategory, getCategory } from './helper/adminapicall';

const UpdateCategory = () => {
  const { categoryId } = useParams();
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const goBack = () => {
    return (
      <div className="mt-5">
        <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">
          Admin Home
        </Link>
      </div>
    );
  };

  const preload = (categoryId) => {
    getCategory(categoryId).then((data) => {
      if (data.error) {
        setError(true);
      } else {
        setError('');
        setSuccess(true);
        setName({
          name: data.name,
        });
      }
    });
  };

  useEffect(() => {
    preload(categoryId);
  }, []);

  const handleChange = (e) => {
    setError('');
    setName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // Backend request fired
    updateCategory(categoryId, user._id, token, { name }).then((data) => {
      console.log(data);
      if (data.error) {
        setError(true);
      } else {
        setError('');
        setSuccess(true);
        setName('');
      }
    });
  };

  const successMessage = () => {
    if (success) {
      return <h4 className="text-success">Category successfully updated!</h4>;
    }
  };

  const warningMessage = () => {
    if (error) {
      return <h4 className="text-success">Failed to update category!</h4>;
    }
  };

  const myCategoryForm = () => {
    return (
      <form>
        <div className="form-group">
          <p className="lead">Enter the category</p>
          <input
            type="text"
            className="form-control my-3"
            onChange={handleChange}
            value={name}
            autoFocus
            required
            placeholder="For ex. Summer"
          />
        </div>
        <button className="btn btn-outline-info" onClick={onSubmit}>
          Update Category
        </button>
      </form>
    );
  };

  return (
    <Base
      title="Create a category here"
      description="Add a new category for new t-shirts"
      className="container bg-info p-4"
    >
      <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {warningMessage()}
          {myCategoryForm()}
          {goBack()}
        </div>
      </div>
    </Base>
  );
};

export default UpdateCategory;
