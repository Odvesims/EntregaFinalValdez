import { useState, useEffect } from 'react';
import { apiRequest } from '../utils/api';
import { useErrorToast } from '../context/ErrorToastContext';
import CartItem from '../components/CartItem';
import { useParams } from 'react-router-dom';
import OrderDetail from '../components/OrderDetail';

const Brief = () => {
  const { showError } = useErrorToast();
  const [order, setOrder] = useState(undefined);

  const { orderId } = useParams();

  useEffect(() => {
    const fetchOrder = async () => {
      const clientOrder = await apiRequest('getOrderById', orderId);
      clientOrder.valid
        ? setOrder(clientOrder.data)
        : showError(clientOrder.message);
    };
    fetchOrder();
  }, []);

  return (
    <div>{order && <OrderDetail order={order} showPersonal={false} />}</div>
  );
};
export default Brief;
