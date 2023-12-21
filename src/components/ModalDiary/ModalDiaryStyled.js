import styled from 'styled-components';

export const Form = styled.form`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 48px;
`;

export const ContainForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
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
  width: 100%;
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
  width: 100%;
`;

export const Button = styled.button`
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