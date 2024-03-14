import { useState } from 'react';
import OrderDetail from '../components/OrderDetail';
import { apiRequest } from '../utils/api';

const PastOrders = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const changeOrderNumber = (value) => {
    if (errorMessage !== '') {
      setErrorMessage('');
    }
    setOrderNumber(value);
  };
  const searchOrder = async () => {
    setErrorMessage('');
    const pastOrder = await apiRequest('getOrderByNumber', orderNumber);
    if (pastOrder && Object.keys(pastOrder).length === 0) {
      setOrder(pastOrder);
    } else {
      setErrorMessage('No order found with that number');
    }
  };

  return (
    <div>
      <h1>Past Orders</h1>
      <div className="row">
        <div className="col-4">
          <input
            className="form-control"
            placeholder="Enter your confirmation number"
            value={orderNumber}
            onChange={(e) => changeOrderNumber(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-primary w-100" onClick={searchOrder}>
            Search
          </button>
        </div>
        <div className="col-4">
          <i className="text-danger">{errorMessage}</i>
        </div>
      </div>
      <OrderDetail order={order} />
    </div>
  );
};

export default PastOrders;
