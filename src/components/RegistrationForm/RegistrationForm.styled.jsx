import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 350px;
  padding: 20px;
  margin: 20px 50px;
`;

export const Title = styled.h2`
  font-family: Verdana;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-align: center;
  margin 150px;
  color: #FC842D;
  margin: 60px 40px;
    @media (max-width: 1024px) {
    display: none;
`;

export const SubTitle = styled.h3`
  font-family: Verdana;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #fc842d;
  margin: 40px 0px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-family: Verdana;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-align: left;
  color: #9b9faa;
`;

export const Input = styled.input`
  width: 240px;
  padding: 5px;
  font-size: 1em;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  outline: none;
`;
//
export const ContButton = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  max-width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 320px) {
    flex-direction: column;
    align-items: center;
    height: 110px;
  }
`;

// Button styles
export const BtnRegister = styled.button`
  width: 181px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17.01px;
  height: 44px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background-color: #fc842d;
  box-shadow: -5px 11px 6px -8px rgba(252, 132, 45, 1);

  @media screen and (max-width: 320px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const BtnLogin = styled(BtnRegister)`
  background-color: #fff;
  border: 2px solid #fc842d;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

// Text button styles
export const TextButtonRegister = styled.span`
  width: 80px;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  line-height: 17.01px;
`;

export const TextButtonLogin = styled.span`
  width: 108px;
  color: #fc842d;
  font-weight: 700;
  font-size: 14px;
  line-height: 17.01px;
`;
