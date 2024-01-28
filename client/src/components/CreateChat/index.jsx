// Modal.jsx
import React from "react";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
