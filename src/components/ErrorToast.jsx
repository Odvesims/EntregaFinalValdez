import { useEffect } from 'react';
import { useState } from 'react';
import { Toast } from 'react-bootstrap';

const ErrorToast = ({ message }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Toast show={show} onClose={() => setShow(false)} delay={5000} autohide>
      <Toast.Header closeButton={false} className="bg-danger text-white">
        <strong className="mr-auto">Error</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};
export default ErrorToast;
