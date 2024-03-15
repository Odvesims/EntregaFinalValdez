import { useState, useEffect } from 'react';
import { apiRequest } from '../utils/api';
import { useErrorToast } from '../context/ErrorToastContext';
import CartItem from './CartItem';
import { useParams } from 'react-router-dom';
import OrderDetail from './OrderDetail';

const Brief = () => {
  const { showError } = useErrorToast();
  const [order, setOrder] = useState(undefined);

  const { orderId } = useParams();

  useEffect(() => {
    const fetchOrder = async () => {
      const clientOrder = await apiRequest('getOrderById', orderId);
      console.log('clientOrder', clientOrder);
      clientOrder.valid
        ? setOrder(clientOrder.data)
        : showError(clientOrder.message);
    };
    fetchOrder();
  }, []);

  return <div>{order && <OrderDetail order={order} />}</div>;
};
export default Brief;
