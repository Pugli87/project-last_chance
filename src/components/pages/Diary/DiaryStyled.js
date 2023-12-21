import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  font-family: Verdana;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-align: left;
`;
export const Wrapper = styled.div`
  display: flex;
`;
export const WrapperResult = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  @media (min-width: 767px) and (max-width: 1023px) {
    display: flex;
    min-width: 100%;
    position: absolute;
    flex-direction: row;
    justify-content: space-between;
    bottom: -32em;
  }
  @media (max-width: 767px) {
    display: flex;
    min-width: 100%;
    position: absolute;
    bottom: -42em;
  }
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

    color: rgba(155, 159, 170, 1);
    margin-top: 4em;
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
          border: 1px solid black;
          outline: none;
          margin-top: 10px;
          border: none;
          border-bottom: 2px solid rgba(224, 224, 224, 1);
          padding: 5px;
          width: 100%;

          &:focus {
            border-bottom: 2px solid orange;
          }
        }
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

export const BtnModal = styled.button`
  padding: 13px 20px;
  border-radius: 30px;
  background-color: #ffa500;
  border: none;
  color: white;
  text-decoration: none;
  display: inline-block;
  font-size: 22px;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: #ff4500;
    color: white;
  }
  @media (max-width: 767px) {
    display: flex;
    margin-bottom: 50px;
  }
`;

export const BtnCloseModal = styled.button`
  background: transparent;
  cursor: pointer;
  }
`;
export const Title = styled.h1`
  font-family: Verdana;
  font-size: 34px;
  font-weight: 700;
  line-height: 41px;
  letter-spacing: 0em;
  text-align: left;

  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
