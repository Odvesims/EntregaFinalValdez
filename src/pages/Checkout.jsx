import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CheckoutCartProduct from '../components/CheckoutCartProduct';
import { apiRequest } from '../utils/api';
import { useErrorToast } from '../context/ErrorToastContext';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../context/LoadingContext';

const Checkout = () => {
  const { setLoading } = useLoading();
  const { cartItems, cartItemsCount, cartTotal, clearCart } =
    useContext(CartContext);
  const [orderName, setOrderName] = useState('');
  const [orderLastName, setOrderLastName] = useState('');
  const [orderPhone, setOrderPhone] = useState('');
  const [orderMail, setOrderMail] = useState('');
  const [orderMailConfirmation, setOrderMailConfirmation] = useState('');
  const { showError } = useErrorToast();
  const navigate = useNavigate();

  const validateOrder = () => {
    if (orderName === '') {
      showError('Name cannot be blank', 3000);
      return false;
    }
    if (orderLastName === '') {
      showError('Lastname cannot be blank', 3000);
      return false;
    }
    if (orderPhone === '') {
      showError('Phone cannot be blank', 3000);
      return false;
    }
    if (orderMail === '') {
      showError('Email cannot be blank', 3000);
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(orderMail)) {
      showError('Email is not valid', 3000);
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(orderMailConfirmation)) {
      showError('Email confirmation is not valid', 3000);
      return false;
    }
    if (orderMail !== orderMailConfirmation) {
      showError('Email and Confirmation dont match', 3000);
      return false;
    }
    if (cartTotal === 0 || cartItemsCount === 0) {
      showError("Can't submit order with $0 total", 3000);
      return false;
    }
    return true;
  };

  const getToday = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return `${year}-${month}-${day}`;
  };

  const submitOrder = async () => {
    if (validateOrder()) {
      const today = getToday();
      const sanitizedProducts = cartItems.map((obj) => {
        const prod = { ...obj };
        delete prod.description;
        return prod;
      });
      const order = {
        client_name: orderName,
        client_lastname: orderLastName,
        client_phone: orderPhone,
        client_email: orderMail,
        order_number: Math.floor(Math.random() * 900000) + 100000,
        order_total: cartTotal,
        products: sanitizedProducts,
        date: today,
      };
      setLoading(true);
      const new_order = await apiRequest('submitOrder', order);
      if (new_order.valid) {
        clearCart();
        setLoading(false);
        navigate(`/brief/${new_order.data.order_id}`);
      } else {
        showError(new_order.message, 5000);
        setLoading(false);
      }
    }
  };
  return (
    <div>
      <div>
        <h1>CheckOut</h1>
      </div>
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your cart</span>
            <span className="badge bg-primary rounded-pill">
              {cartItemsCount}
            </span>
          </h4>
          <ul className="list-group mb-3">
            {cartItems.map((item) => {
              return (
                <CheckoutCartProduct
                  name={item.name}
                  count={item.count}
                  total={item.total}
                  key={item.id}
                />
              );
            })}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total</span>
              <strong>${cartTotal}</strong>
            </li>
          </ul>
        </div>
        <div className="col-md-7 col-lg-8 ml-4">
          <h3>Order Information</h3>
          <div></div>
          <div className="row g-3">
            <div className="col-sm-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                onChange={(e) => {
                  setOrderName(e.target.value);
                }}
                value={orderName}
              />
            </div>
            <div className="col-sm-6">
              <label className="form-label">Lastname</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                onChange={(e) => {
                  setOrderLastName(e.target.value);
                }}
                value={orderLastName}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
                onChange={(e) => {
                  setOrderMail(e.target.value);
                }}
                value={orderMail}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Confirmation</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Confirm Email"
                onChange={(e) => {
                  setOrderMailConfirmation(e.target.value);
                }}
                value={orderMailConfirmation}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="(111) 111-1111"
                onChange={(e) => {
                  setOrderPhone(e.target.value);
                }}
                value={orderPhone}
              />
            </div>
            <div className="text-center">
              <button
                className="w-50 btn btn-primary btn-lg"
                onClick={submitOrder}
              >
                Submit Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
