import { useState } from 'react';
import OrderDetail from '../components/OrderDetail';
import { apiRequest } from '../utils/api';
import Brief from '../components/Brief';
import { useLoading } from '../context/LoadingContext';

const PastOrders = () => {
  const { setLoading } = useLoading();
  const [orderNumber, setOrderNumber] = useState('');
  const [order, setOrder] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState('');

  const changeOrderNumber = (value) => {
    if (errorMessage !== '') {
      setErrorMessage('');
    }
    setOrderNumber(value);
  };
  const searchOrder = async () => {
    setErrorMessage('');
    setLoading(true);
    const pastOrder = await apiRequest('getOrderByNumber', orderNumber);
    if (pastOrder.valid && pastOrder.data !== undefined) {
      setOrder(pastOrder.data);
    } else {
      setErrorMessage('No order found with that number');
    }
    setLoading(false);
  };

  const changeOrderNumberHander = (value) => {
    changeOrderNumber(value);
    setOrder(undefined);
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
            onChange={(e) => changeOrderNumberHander(e.target.value)}
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
      {order && <OrderDetail order={order} />}
    </div>
  );
};

export default PastOrders;
