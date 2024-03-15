import RemoveItemButton from './RemoveItemButton';

import '../assets/styles/CartItem.css';

const CartItem = ({ item, remove }) => {
  const { id, name, price, count, total, image } = item;
  return (
    <div className="card col-12 mt-1">
      <div className="row g-12">
        <div className="col-md-2">
          <img
            src={image}
            className="img-fluid rounded-start w-100"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="cart-item-title card-title">{name}</h5>
            <div className="row">
              <div className="col-6 cart-item-detail">Quantity: {count}</div>
              <div className="col-6 cart-item-detail">Price: {price}</div>
            </div>
            <p className="card-text cart-item-detail">Total: ${total}</p>
          </div>
        </div>
        {remove === true && (
          <div className="col-md-2 mt-3">
            <div className="card-text">
              <RemoveItemButton itemId={id} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default CartItem;
