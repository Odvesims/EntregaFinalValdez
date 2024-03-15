import '../assets/styles/LoadingModal.css';
import { FaSpinner } from 'react-icons/fa';

const LoadingModal = ({ message = 'Please, wait...' }) => {
  return (
    <div>
      <div className="modal-background">
        <div className="loading-modal">
          <div className="modal-content">
            <center>
              <h2>
                <FaSpinner>{message}</FaSpinner>
              </h2>
              <h2>{message}</h2>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoadingModal;
