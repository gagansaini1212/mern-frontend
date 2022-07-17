import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import { cartEmpty, loadCart } from './helper/cartHelper';
import StripeCheckoutButton from 'react-stripe-checkout';
import { API } from '../backend';
import { createOrder } from './helper/orderHelper';

const StripeCheckout = ({ products, setReload, reload = undefined }) => {
  const [data, setData] = useState({
    loading: false,
    success: false,
    error: '',
    address: '',
  });

  const token = isAuthenticated() && isAuthenticated().token;
  const userId = isAuthenticated() && isAuthenticated().user._id;

  const getFinalTotal = () => {
    let amount = 0;
    products.map((product) => {
      amount = amount + product.price;
    });
    return amount;
  };

  const makePayment = (token) => {
    const body = {
      token,
      products,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    return fetch(`${API}/stripe-payment`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response);
        // Call further methods here

        const { status } = response;

        cartEmpty();
      })
      .catch((err) => console.log(err));
  };

  const showStripeButton = () => {
    return isAuthenticated() ? (
      <StripeCheckoutButton
        stripeKey={process.env.STRIPE_KEY}
        token={makePayment()}
        amount={getFinalTotal() * 100}
        name="Buy T-shirts"
        shippingAddress
        billingAddress
      >
        <button className="btn btn-success">Pay with stripe</button>
      </StripeCheckoutButton>
    ) : (
      <Link to="/signin">
        <button className="btn btn-warning">Signin</button>
      </Link>
    );
  };

  return (
    <div>
      <h3 className="text-white">Stripe loaded {getFinalTotal()}</h3>
      {showStripeButton()}
    </div>
  );
};

export default StripeCheckout;
