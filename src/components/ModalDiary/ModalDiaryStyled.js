import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin-top: 48px;
`;

export const ContainForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 17px;
`;
export const Box = styled.div`
  margin: 20px;
`;

export const Input = styled.input`
  margin-top: 17px;
  border: none;
  border-bottom: 1px solid lightgray;
  width: 35vh;
  text-align: left;
  font-family: Verdana;
  outline: none;
  &: focus {
    border-bottom: 1px solid orange;
  }
`;

export const InputGramos = styled.input`
  margin-top: 17px;
  border: none;
  border-bottom: 1px solid lightgray;
  margin-right: 48px;
  width: 35vh;
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
  color: lightgray;
`;

export const LabelGramos = styled.label`
  display: flex;
  flex-direction: column;
  width: 107px;
  color: lightgray;
`;

export const Button = styled.button`
  position: relative;
  bottom: -13em;
  left: -17em;
  width: 176px;
  height: 44px;
  padding: 2px 72px;
  color: white;
  border-radius: 30px;
  background-color: #ffa500;
  font-size: 14px;
  font-weight: 900;
  cursor: pointer;
  margin-top: 40px;
  &:hover {
    background-color: #ff4500;
    color: white;
  }
`;

export const FormText = styled.div`
.formList {
  .listForm {
    margin-top: 150px;
    margin-left: 80px;
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
