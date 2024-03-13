import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { FaTrash } from 'react-icons/fa';
import ConfirmationModal from './ConfirmationModal';

const RemoveItemButton = ({ itemId }) => {
  const { removeItemFromCart } = useContext(CartContext);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const removeItem = () => {
    removeItemFromCart(itemId);
    setShowConfirmModal(false);
  };

  const openConfirmation = () => {
    setShowConfirmModal(true);
  };

  const closeConfirmation = () => {
    setShowConfirmModal(false);
  };

  console.log(showConfirmModal);

  return (
    <div>
      <button className="btn btn-danger" onClick={openConfirmation}>
        <FaTrash />
      </button>
      {showConfirmModal && (
        <ConfirmationModal
          confirmationMessage="Are you sure you want to remove this item?"
          onConfirm={removeItem}
          onCancel={closeConfirmation}
        />
      )}
    </div>
  );
};
export default RemoveItemButton;
