import { useState, useEffect } from 'react';

import '../styles.css';
import Base from './Base';
import Card from './Card';
import { loadCart } from './helper/cartHelper';
import PaymentB from './PaymentB';
// import StripeCheckout from './StripeCheckout';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = (products) => {
    return (
      <div>
        <h2>This section to load products</h2>

        {products?.map((product, index) => {
          return (
            <Card
              key={index}
              product={product}
              addToCart={false}
              removeFromCart={true}
              setReload={setReload}
              reload={reload}
            />
          );
        })}
      </div>
    );
  };

  return (
    <Base title="Cart Page" description="Ready to checkout">
      <div className="row text-center">
        <div className="col-6">
          {products?.length >= 0 ? (
            loadAllProducts(products)
          ) : (
            <h3>No products in cart</h3>
          )}
        </div>
        {/* <div className="col-6">
          <StripeCheckout products={products} setReload={setReload} />
        </div> */}
        <div className="col-6">
          <PaymentB products={products} setReload={setReload} />
        </div>
      </div>
    </Base>
  );
};

export default Cart;
