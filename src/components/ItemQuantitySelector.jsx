import { FaMinus, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ItemQuantitySelector = ({
  itemCount,
  setItemCount,
  itemCartExistence,
}) => {
  const substractQuantity = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  };

  const addQuantity = () => {
    setItemCount(itemCount + 1);
  };

  const quantitySelector = (
    <div>
      <div className="row col-12">
        <div className="col-4">
          <button className="btn btn-secondary" onClick={substractQuantity}>
            <FaMinus />
          </button>
        </div>
        <div className="col-4">
          <p>{itemCount}</p>
        </div>
        <div className="col-4">
          <button className="btn btn-secondary" onClick={addQuantity}>
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );

  const finalizePurchaseButton = (
    <div className="row col-12 mt-3">
      <div className="col-12">
        <Link className="btn btn-success text-white" to={`/cart`}>
          Finalize Purchase
        </Link>
      </div>
    </div>
  );

  return (
    <div>{itemCartExistence ? finalizePurchaseButton : quantitySelector}</div>
  );
};
export default ItemQuantitySelector;
