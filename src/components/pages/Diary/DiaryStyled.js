import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 100px;
  margin-bottom: 200px;
`;
export const Wrapper = styled.div`
  display: flex;
`;
export const WrapperResult = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;
export const WrapperDaily = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: 94px;
`;

export const ContainerDiary = styled.div`
  display: flex;
`;

export const ContainerBtndate = styled.div`
  display: flex;
`;

export const BtnDiary = styled.button`
  background: transparent;
  border-radius: 30px;
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    background-color: #e7edf0;
  }
`;

export const FormContainer = styled.div`
  .form {
    display: flex;
    width: 100%;

    .input-group {
      display: flex;

      .labelForm {
        display: flex;
        flex-direction: column;
        margin-right: 50px;
        width: 300px;

        input {
          margin-top: 10px;
          border: none;
          border-bottom: 2px solid #000;
          padding: 5px;
          width: 100%;
        }
      }
    }

    .btnSave {
      align-self: flex-end;
      padding: 15px 20px; 
      border-radius: 30px;
      background-color: #FFA500;
      border: none;
      color: white;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      transition-duration: 0.4s;
      cursor: pointer;

      &:hover {
        background-color: #FF4500;
        color: white;
      }
    }
  }
  .formList {
    .listForm {
      margin-top: 50px;
      display: flex;
      align-items: center;
      .btnDelete {
        margin-left: 10px;
        padding: 7px 13px;
        background-color: transparent;
        border: none;
        border-radius: 30px;
        color: grey;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        transition-duration: 0.4s;
        cursor: pointer;

        &:hover {
          background-color: #c5c1c1;
        }
      }
    }
  }
`;

export const Button = styled.button``;

export const Div = styled.div``;
