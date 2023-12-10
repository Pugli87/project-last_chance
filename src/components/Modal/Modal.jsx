import React from 'react';
import {
  Overlay,
  ContentModal,
  Headermodal,
  ButtonClose,
} from './Modal.styled';

const Modal = ({ children, state, changestate }) => {
  return (
    <>
      {state && (
        <Overlay>
          <ContentModal>
            <Headermodal>
              <h3> Bienvenido</h3>
            </Headermodal>

            <ButtonClose onClick={() => changestate(false)}>X</ButtonClose>
            {children}
          </ContentModal>
        </Overlay>
      )}
    </>
  );
};

export default Modal;
