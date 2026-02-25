import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';
import '../styles/Toast.css';

export const ToastContext = React.createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'info', duration = 3000) => {
    const id = Date.now();
    const newToast = { id, message, type };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="toast-container">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            onClose={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
            show
            delay={3000}
            autohide
            className={`toast-${toast.type}`}
          >
            <Toast.Body className={`text-${toast.type}`}>{toast.message}</Toast.Body>
          </Toast>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => React.useContext(ToastContext);
