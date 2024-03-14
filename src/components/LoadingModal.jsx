import { useState } from 'react';
import '../assets/styles/ConfirmationModal.css';

const LoadingModal = ({ message, isShowing }) => {
  const [show] = useState(isShowing);

  return (
    <div>
      {show && (
        <div className="modal-background">
          <div className="loading-modal">
            <div className="modal-content">
              <p>{message}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default LoadingModal;
