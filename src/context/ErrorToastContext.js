import { createContext, useState, useContext } from 'react';
import { Toast } from 'react-bootstrap';
import ErrorToast from '../components/ErrorToast';

const ErrorToastContext = createContext();

export const useErrorToast = () => useContext(ErrorToastContext);

const ErrorToastProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const showError = (message) => {
    setErrorMessage(message);
  };

  return (
    <ErrorToastContext.Provider value={{ showError }}>
      {children}
      {errorMessage && (
        <ErrorToast message={errorMessage} className="text-center" />
      )}
    </ErrorToastContext.Provider>
  );
};
export default ErrorToastProvider;
