import { useState } from 'react';
import '../assets/styles/ConfirmationModal.css';

const ConfirmationModal = ({ confirmationMessage, onConfirm, onCancel }) => {
  const [show, setShow] = useState(true);

  const confirmationHandler = () => {
    setShow(false);
    onConfirm();
  };

  const cancelHandler = () => {
    setShow(false);
    onCancel();
  };

  return (
    <div>
      {show && (
        <div className="modal-background">
          <div className="confirmation-modal">
            <div className="modal-content">
              <p>{confirmationMessage}</p>
            </div>
            <div className="modal-actions">
              <div className="row">
                <div className="col">
                  <button
                    className="btn btn-primary mr-2"
                    onClick={confirmationHandler}
                  >
                    Confirm
                  </button>
                </div>
                <div className="col">
                  <button className="btn btn-secondary" onClick={cancelHandler}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ConfirmationModal;
