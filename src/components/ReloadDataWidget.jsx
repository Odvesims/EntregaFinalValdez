import { FaSync } from 'react-icons/fa';
import { useState } from 'react';
import { apiRequest } from '../utils/api';
import ConfirmationModal from './ConfirmationModal';
import { useLoading } from '../context/LoadingContext';

const ReloadDataWidget = () => {
  const { setLoading } = useLoading();
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const clearData = async () => {
    setLoading(true);
    await apiRequest('clearLocalData');
    setLoading(false);
    setShowConfirmModal(false);
  };

  const openConfirmation = () => {
    setShowConfirmModal(true);
  };

  const closeConfirmation = () => {
    setShowConfirmModal(false);
  };
  return (
    <div>
      <button
        className="btn btn-info cart-item-icon"
        onClick={openConfirmation}
      >
        <FaSync />
      </button>
      {showConfirmModal && (
        <ConfirmationModal
          confirmationMessage="Do you wish to reload app's data?"
          onConfirm={clearData}
          onCancel={closeConfirmation}
        />
      )}
    </div>
  );
};
export default ReloadDataWidget;
