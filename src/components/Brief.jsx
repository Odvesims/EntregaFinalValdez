import { useContext, useState } from 'react';
import BriefCartProduct from './BriefCartProduct';
import { CartContext } from '../context/CartContext';

const Brief = () => {
  const { cartItems, cartItemsCount, cartTotal } = useContext(CartContext);
  const [orderName, setOrderName] = useState('');
  const [orderAddress, setOrderAddress] = useState('');
  const [orderMail, setOrderMail] = useState('');

  return (
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
              <BriefCartProduct
                name={item.name}
                count={item.count}
                total={item.total}
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
        <div class="row g-3">
          <div class="col-sm-6">
            <label for="firstName" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              placeholder=""
              value=""
              required=""
            />
          </div>
          <div class="col-12">
            <label for="email" class="form-label">
              Email <span class="text-body-secondary">(Optional)</span>
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="you@example.com"
            />
          </div>
          <div class="col-12">
            <label for="address" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="1234 Main St"
              required=""
            />
          </div>
          <div className="text-center">
            <button className="w-50 btn btn-primary btn-lg" type="submit">
              Submit Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Brief;
