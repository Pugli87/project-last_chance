import styled, { keyframes } from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 500px;
  box-shadow: #fc842d 0px 4px 10px;
  position: relative;
  animation: ${keyframes`
    0% {
      border: 1px solid #fc842d;
      box-shadow: 0 0 3px #fc842d, 0 0 5px #fc842d, 0 0 5px #fc842d;
    }
    100% {
      border: 1px solid rgba(252, 132, 45, 0.05);
      box-shadow: 0 0 3px #fc842d, 0 0 5px #fc842d, 0 0 5px #fc842d,
        0 0 16px #fc842d, 0 0 20px #fc842d;
    }
  `} 2s linear infinite;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    width: 320px;
  }

  @media screen and (max-width: 767px) {
    width: 160px;
  }
`;

export const ModalTitle = styled.h2`
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }

  @media screen and (max-width: 767px) {
    font-size: 11px;
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
  }
`;

export const ModalButton = styled.button`
  cursor: pointer;
  border: 2px solid #fc842d;
  background: white;
  color: #fc842d;
  padding: 8px 16px;
  margin: 0 10px;
  border-radius: 43px;
  box-shadow: rgba(252, 132, 45, 0.5) 0px 4px 10px;
  margin-top: 50px;
  position: relative;
  overflow: hidden;
  transition: background 0.3s, color 0.3s, transform 0.3s;

  &:hover {
    background: #fc842d;
    color: white;
    transform: perspective(500px) rotateX(10deg);
  }

  @media screen and (max-width: 767px) {
    font-size: 10px;
    margin: 10px;
  }
`;
