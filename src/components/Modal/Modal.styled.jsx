import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
`;
export const ContentModal = styled.div`
  width: 672px;
  height: 574px;
  background: #fff;
  position: relative;
  border-radius: 10px;
  box-shadow: rgba (100, 100, 111 0.2) 0px 7px 29px 0px;
  padding: 20px;
  z-index: 10;
  @media (max-width: 767px) {
    width: 300px;
    height: 550px;
  }
`;

export const Headermodal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;

  h3 {
    font-size: 14px;
    color: #000;
  }
  @media (max-width: 767px) {
    h3 {
      font-size: 10px;
      color: #000;
    }
  }
`;

export const ButtonClose = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  width: 30px;
  height: 30px;
  border: none;
  backgroud: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  &: hover {
    background: #f2f2f2;
  }

  @media (max-width: 767px) {
    width: 10px;
    height: 1px;
  }
`;

export const ContainerB = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
