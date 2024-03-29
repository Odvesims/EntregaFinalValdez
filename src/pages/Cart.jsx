import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

import '../assets/styles/Cart.css';

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const [orderTotal, setOrderTotal] = useState({ items: 0, amount: 0 });

  useEffect(() => {
    let sumTotal = 0;
    let sumCount = 0;
    cartItems.forEach((item) => {
      sumTotal += item.total;
      sumCount += item.count;
    });
    setOrderTotal({ items: sumCount, amount: sumTotal });
  }, [cartItems]);

  return (
    <div>
      {cartItems.length > 0 ? (
        <div className="row">
          <div className="col-5 cart-items-container">
            {cartItems.map((item) => (
              <div key={item.id} className="ml-2 mt-2 mb-2">
                <CartItem item={item} remove={true} />
              </div>
            ))}
          </div>
          <div className="col-7">
            <strong>
              <h3>
                <div className="ml-2 mt-2 mb-2 row">
                  <div className="col-lg-2 col-md-3 col-sm-4">Items:</div>
                  <div className="col-lg-2 col-md-3 col-sm-4">
                    {orderTotal.items}
                  </div>
                </div>
              </h3>
            </strong>
            <strong>
              <h3>
                <div className="ml-2 mt-2 mb-2 row">
                  <div className="col-lg-2 col-md-3 col-sm-4">Total:</div>
                  <div className="col-lg-2 col-md-3 col-sm-4">
                    ${orderTotal.amount}
                  </div>
                </div>
              </h3>
            </strong>
            <div className="ml-2 mt-2 mb-2 row col-12">
              <div className="col-lg-2 col-md-3 col-sm-6 mt-2">
                <Link className="btn btn-success text-white" to={`/checkout`}>
                  Checkout
                </Link>
              </div>
              <div className="col-lg-3 col-md-5 col-sm-6 mt-2">
                <Link className="btn btn-info text-white" to={`/past_orders`}>
                  Past Orders
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h2>No Items in Cart</h2>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-6 mt-2">
            <Link className="btn btn-info text-white" to={`/past_orders`}>
              Past Orders
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
