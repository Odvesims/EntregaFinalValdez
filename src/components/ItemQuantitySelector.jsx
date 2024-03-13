import { FaMinus, FaPlus } from 'react-icons/fa';

const ItemQuantitySelector = ({
  itemCount,
  setItemCount,
  itemCartExistence,
}) => {
  const substractQuantity = () => {
    setItemCount(itemCount - 1);
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
    <div className="row col-12">
      <div className="col-4">
        <button className="btn btn-secondary" onClick={substractQuantity}>
          Finalize Purchase
        </button>
      </div>
    </div>
  );

  return (
    <div>{itemCartExistence ? finalizePurchaseButton : quantitySelector}</div>
  );
};
export default ItemQuantitySelector;
