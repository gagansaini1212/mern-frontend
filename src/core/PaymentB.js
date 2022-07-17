import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DropIn from 'braintree-web-drop-in-react';

import { isAuthenticated } from '../auth/helper';
import { cartEmpty, loadCart } from './helper/cartHelper';
import { createOrder } from './helper/orderHelper';
import { getMeToken, processPayment } from './helper/paymentHelper';

const PaymentB = ({ products, setReload }) => {
  const [info, setInfo] = useState({
    loading: false,
    success: false,
    error: '',
    clientToken: null,
    instance: {},
  });

  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  const getToken = (uerId, token) => {
    getMeToken(userId, token).then((info) => {
      if (info.error) {
        setInfo({ ...info, error: info.error });
      } else {
        const clientToken = info.clientToken;
        setInfo(clientToken);
      }
    });
  };
  useEffect(() => {
    getToken(userId, token);
  }, []);

  const showDropIn = () => {
    return (
      <div>
        {/* {info.clientToken !== null && products?.length > 0 ? ( */}
        <div>
          <DropIn
            options={{ authorization: info.clientToken }}
            onInstance={(instance) => (info.instance = instance)}
          />
          <button className="btn btn-success btn-block" onClick={() => {}}>
            Buy
          </button>
        </div>
        {/* ) : (
          <h3>Please login or ad something to cart</h3>
        )} */}
      </div>
    );
  };

  return (
    <div>
      <h3>test BT</h3>
      {showDropIn()}
    </div>
  );
};

export default PaymentB;
