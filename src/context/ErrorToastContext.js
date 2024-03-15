import { createContext, useState, useContext } from 'react';
import '../assets/styles/ErrorToast.css';
import ErrorToast from '../components/ErrorToast';

const ErrorToastContext = createContext();

export const useErrorToast = () => useContext(ErrorToastContext);

const ErrorToastProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [timeOut, setTimeOut] = useState(0);

  const showError = (message, timer = 5000) => {
    setErrorMessage(message);
    setTimeOut(timer);
  };

  return (
    <ErrorToastContext.Provider value={{ showError }}>
      <div className="error-toast-container">
        <div className="error-toast">
          {errorMessage && (
            <ErrorToast
              clearMessage={(e) => {
                setErrorMessage('');
              }}
              message={errorMessage}
              timeOut={timeOut}
              className="text-center"
            />
          )}
        </div>
        {children}
      </div>
    </ErrorToastContext.Provider>
  );
};
export default ErrorToastProvider;
