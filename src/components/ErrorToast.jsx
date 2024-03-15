import { useEffect } from 'react';
import { useState } from 'react';
import { Toast } from 'react-bootstrap';

const ErrorToast = ({ message, clearMessage, timeOut = 5000 }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      clearMessage();
    }, timeOut);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Toast show={show} onClose={() => setShow(false)} delay={5000} autohide>
        <Toast.Header closeButton={false} className="bg-danger text-white">
          <strong className="mr-auto">Error</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </div>
  );
};
export default ErrorToast;
