import React, { useEffect } from 'react';
import {
  ModalOverlay,
  ModalContainer,
  ModalTitle,
  ModalButtons,
  ModalButton,
} from './Modal.styles';

const Modal = ({ title, onYesClick, onNoClick }) => {
  useEffect(() => {
    const handleOutsideClick = event => {
      if (event.target.classList.contains('modal-overlay')) {
        onNoClick();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [onNoClick]);

  return (
    <ModalOverlay className="modal-overlay">
      <ModalContainer className="modal">
        <ModalTitle>{title}</ModalTitle>
        <ModalButtons className="modal-buttons">
          <ModalButton className="modal-button yes" onClick={onYesClick}>
            Abandonar
          </ModalButton>
          <ModalButton className="modal-button no" onClick={onNoClick}>
            Permanecer
          </ModalButton>
        </ModalButtons>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
