import styled, { css } from 'styled-components';

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

export const DatePicker = styled.div`
  top: 3em !important;
  left: 1em !important;
  position: absolute !important;
  z-index: 1000 !important;
  font-size: 1em !important;
  background-color: white !important;
  border: none !important;
  border-radius: 8px !important;
  box-shadow: 0 2px 6px rgba(60,64,67,0.3), 0 1px 2px rgba(60,64,67,0.15) !important;

  all: initial;
  * {
    all: unset;
  }
`;

export const DatePickerHeader = styled.div`
  background-color: white !important;
  border: none !important;
  display: flex;
  flex-direction: column;
  font-size: 1.1em;
  font-weight: 700;
`;

export const DatePickerDay = styled.div`
  margin: 5px !important;

  &:hover {
    border-radius: 50% !important;
    background-color: #e8f0fe !important;
    color: #1a73e8 !important;
  }

  ${props => props.selected && css`
    border-radius: 50% !important;
    background-color: #1a73e8 !important;
    color: white !important;
  `}

  ${props => props.today && css`
    border: 1px solid #1a73e8 !important;
  `}
`;

export const DatePickerDayName = styled.div`
  margin: 5px !important;
  color: #3c4043 !important;
`;

export const DatePickerMonth = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DatePickerCurrentMonth = styled.div`
  font-size: 1.1em !important;
  font-weight: 700 !important;
`;

export const DatePickerNavigation = styled.div`
  line-height: 18px !important;
`;

export const DatePickerNavigationPrevious = styled(DatePickerNavigation)`
  position: absolute !important;
  right: 3em !important;
`;

export const DatePickerDayDisabled = styled(DatePickerDay)`
  color: #ccc !important;
`;
