import styled from 'styled-components';

export const Container = styled.div`
  max-width: 437px;
  margin-top: 100px;
  padding: 20px;
  left: 10px;
  top: 100px;

  @media screen and (max-width: 320px) {
    width: 280px;
    margin-top: 32px;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Tittle = styled.h3`
    color: #FC842D;
    font-weight: 700;
    size: 14px;
    margin-bottom: 55px;
    }
  `;

export const SubTittle = styled.h3`
  color: #9b9faa;
  font-weight: 700;
  size: 14px;
  margin-bottom: 15px;
`;

export const ButtonCrear = styled.div`
  width: 181px;
  height: 44px;
  border-radius: 20px;
  cursor: pointer;
  background-color: #fff;
  border: 2px solid #fc842d;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    background-color: #fc842d;
    p {
      color: #fff;
    }
  }
`;

export const Input = styled.input`
  width: 280px;
  margin-bottom: 10px;
  border-left: none;
  border-top: none;
  border-right: none;
  outline: none;

  &:hover {
    border: 1px solid #fc842d;
    border-left: none;
    border-top: none;
    border-right: none;
  }
`;

export const ContButton = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  max-width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 320px) {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    align-items: center;
    height: 110px;
  }
`;

export const InputWanning = styled.input`
  width: 280px;
  height: 50px;
  margin-bottom: 5px;
  border: 1px solid red;
  border-left: none;
  border-top: none;
  border-right: none;
  outline: none;
  color: red;
  display: block;
`;
export const WarningText = styled.p`
  font-size: 9px;
  color: red;
  font-family: Verdana;
  font-weight: 400;
`;

export const ContFormCorreo = styled.div`
  width: 290px;
  margin-bottom: 15px;
  &:hover {
    h3 {
      color: #fc842d;
    }

    input {
      border: 1px solid #fc842d;
      border-left: none;
      border-top: none;
      border-right: none;
    }
  }

  &:focus-within {
    h3 {
      color: #fc842d;
    }

    input {
      border: 1px solid #fc842d;
      border-left: none;
      border-top: none;
      border-right: none;
    }
  }
`;

export const ContFormContra = styled.div`
    width: 290px;
    &:hover {
      h3 {
        color: #FC842D; 
      }

    input {
      border: 1px solid #FC842D;
      border-left: none;
      border-top: none;
      border-right: none;
    }

    &:focus-within {
      h3 {
        color: #FC842D; 
      } 

      input {
        border: 1px solid #FC842D;
        border-left: none;
        border-top: none;
        border-right: none;
      }
    }
  `;

export const Button = styled.button`
  width: 181px;
  height: 44px;
  border: none;
  border-radius: 20px;
  margin-bottom: 18px;
  cursor: pointer;
  background-color: #fc842d;
  box-shadow: -5px 11px 6px -8px rgba(252, 132, 45, 1);
`;

export const TextButtonIniciar = styled.p`
  width: 80px;
  color: #fff;
  margin: auto;
  font-weight: 700;
  font-size: 14px;
  line-height: 17.01px;
`;

export const TextButtonCrear = styled.p`
  margin: auto;
  font-weight: 700;
  font-size: 14px;
  line-height: 17.01px;
  width: 108px;
  color: #fc842d;
  display: flex;
  justify-content: center;
  padding: 0;
`;
