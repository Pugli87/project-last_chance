import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px;
  width: 608px;
  align-items: left;
  @media (max-width: 768px) {
    width: auto;
  }
`;

export const Title = styled.h2`
  font-family: Verdana;
  font-size: 34px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 60px;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  width: 240px;
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
  width: 200px;
  padding: 5px;
  font-size: 1em;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  outline: none;
  background: none;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: #9b9faa;
`;

export const RadioInput = styled.input`
  margin: 1px 5px;
  width: 15px;
  height: 15px;
  outline: 1px solid rgb(155, 159, 170);
  -webkit-appearance: none;
  border-radius: 50%;
  &:checked {
    outline: 1px solid #fc842d;
    background: #fc842d;
  }
`;

export const Form = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 768px) {
    height: 400px;
  }
`;
export const BoxButton = styled.div`
  margin-top: -20px;
  text-align: right;

  @media (max-width: 768px) {
    margin: -60px 80px;
  }
`;

export const StyledH3 = styled.h3`
  font-size: 26px;
  font-weight: 700;
  font-family: verdana;
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const StyledH2 = styled.h2`
  display: flex;
  align-items: baseline;
  font-size: 48px;
  color: #264061;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.04em;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const StyledHr = styled.hr`
  width: 330px;
  border: 1px solid #e0e0e0;
  @media (max-width: 768px) {
    width: 260px;
  }
`;
export const StyledHrS = styled.hr`
  width: 201px;
  border: 0.7px solid #e0e0e0;
  margin: 10px;
  margin-left: 0px;
  margin-top: 27px;
`;

export const StyledH5 = styled.h5`
  font-size: 16px;
  letter-spacing: 0.04em;
  @media (max-width: 768px) {
    font-family: Verdana;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0.04em;
    text-align: left;
  }
`;

export const StyledP = styled.p`
  font-family: Verdana;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  align-item: left;
  @media (max-width: 768px) {
    font-family: Verdana;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0.04em;
    text-align: left;
  }
`;

export const StyledDiv = styled.div`
  width: 330px;
  @media (max-width: 768px) {
    width: 222px;
    height: 112px;
    top: 404px;
    left: 20px;
    margin: 30px 0;
  }
`;

export const Styledol = styled.ol`
  font-size: 14px;
  font-weight: 100;
  line-height: 30px;
  letter-spacing: 0.04em;
  text-align: left;
  color: #9b9faa;
  margin: 10px 0;
  padding: 20px;
  @media (max-width: 768px) {
    margin: 5px 0;
    padding: 15px;
  }
`;
