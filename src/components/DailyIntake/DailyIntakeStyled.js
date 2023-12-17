import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin-top: 48px;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const ContainForm = styled.div`
  display: flex;
  align-items: flex-end;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin-right: 50px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid lightgray;
  width: 240px;
  text-align: left;
  font-family: Verdana;
  outline: none;
  &: focus {
    border-bottom: 1px solid orange;
  }
`;

export const InputGramos = styled.input`
  border: none;
  border-bottom: 1px solid lightgray;
  margin-right: 48px;
  width: 105px;
  text-align: left;
  font-family: Verdana;
  outline: none;
  &: focus {
    border-bottom: 1px solid orange;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 240px;
  color: lightgray;
`;

export const LabelGramos = styled.label`
  display: flex;
  flex-direction: column;
  width: 107px;
  text-align: end;
  color: lightgray;
`;

export const Button = styled.button`
    padding: 15px 20px; 
    border-radius: 30px;
    background-color: #FFA500;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 22px;
    transition-duration: 0.4s;
    cursor: pointer;
    @media (max-width: 767px) {
      display: none;
    }
    &:hover {
      background-color: #FF4500;
      color: white;
      }
    }
`;

export const FormText = styled.div`
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
`;
