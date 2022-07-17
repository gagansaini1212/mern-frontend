import { useState, useEffect } from 'react';

import '../styles.css';
import Base from './Base';
import Card from './Card';
import { getProducts } from './helper/coreapicalls';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <Base title="Home Page" description="Welcome to the T-shirt stuff">
      <div className="row">
        <h1 className="text-white">All of Products</h1>
        {products.map((product, index) => (
          <div key={index} className="col-4 mb-4 text-center">
            <Card product={product} />
          </div>
        ))}
      </div>
    </Base>
  );
};

export default Home;
