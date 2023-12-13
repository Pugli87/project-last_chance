import React from 'react';
import './Modal.scss';

const Modal = ({ title, onYesClick, onNoClick }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{title}</h2>
        <div className="modal-buttons">
          <button className="modal-button yes" onClick={onYesClick}>
            Yes
          </button>
          <button className="modal-button no" onClick={onNoClick}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
