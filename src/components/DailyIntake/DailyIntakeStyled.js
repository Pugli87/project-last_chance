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
  gap: 20px;
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
    margin-top: 20px;
    display: flex;
    align-items: center;
    .btnDelete {
      margin-left: 10px;
      padding: 8px 10px;
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
        background-color: #f0f1f3;
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