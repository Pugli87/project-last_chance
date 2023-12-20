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

export const Name = styled.span`
  display: inline-block;
  border-bottom: 1px solid rgb(224, 224, 224);
  padding-bottom: 20px;
  width: 50%;
`;

export const Grams = styled.span`
  justify-content: end;
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(224, 224, 224);
  width: 20%;
  margin-left: 30px;
`;

export const Kcal = styled.span`
  justify-content: end;
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(224, 224, 224);
  width: 20%;
  margin-left: 30px;
`;

export const ScrollableFormText = styled(FormText)`
  margin-top: 50px;
  max-height: 300px;
  overflow-y: auto;
`;