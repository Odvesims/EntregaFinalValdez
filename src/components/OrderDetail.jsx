import CartItem from './CartItem';

const OrderDetail = ({ order, showPersonal = true }) => {
  return (
    <div>
      <div>
        <h1>{`Order #${order.order_number} Brief`}</h1>
      </div>
      {showPersonal && (
        <div>
          <div className="row">
            <div className="col-2">Date:</div>
            <div className="col-10">{order.date}</div>
          </div>
          <div className="row">
            <div className="col-2">Name:</div>
            <div className="col-10">
              {order.client_name} {order.client_lastname}
            </div>
          </div>
          <div className="row">
            <div className="col-2">Email:</div>
            <div className="col-10">{order.client_email}</div>
          </div>
          <div className="row">
            <div className="col-2">Phone:</div>
            <div className="col-10">{order.client_phone}</div>
          </div>
        </div>
      )}
      <div className="row">
        <div className="col-2">
          <h3>Products</h3>
        </div>
      </div>
      {order.products &&
        order.products.map((product) => {
          return <CartItem key={product.id} item={product} remove={false} />;
        })}
      <div className="row h3">
        <div className="col-2">Total:</div>
        <div className="col-10">{order.order_total}</div>
      </div>
    </div>
  );
};
export default OrderDetail;
