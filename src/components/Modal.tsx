import React from "react";
import "../styles/Modal.css";

interface ModalProps {
  message: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-labelledby="modalTitle"
      aria-hidden="false"
    >
      <div className="modal">
        <div className="modal-content">
          <h2 id="modalTitle">Success</h2>
          <p>{message}</p>
          <button
            onClick={onClose}
            aria-label="Close the modal"
            className="modal-close-btn"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
