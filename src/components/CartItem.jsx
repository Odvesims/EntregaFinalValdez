import RemoveItemButton from './RemoveItemButton';

const CartItem = ({ item }) => {
  const { id, name, price, count, total, image } = item;
  return (
    <div className="card col-12">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={image}
            className="img-fluid rounded-start w-100"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <div className="row">
              <div className="col-6">Quantity: {count}</div>
              <div className="col-6">Price: {price}</div>
            </div>
            <p className="card-text">Total: ${total}</p>
            <div className="card-text">
              <RemoveItemButton itemId={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
