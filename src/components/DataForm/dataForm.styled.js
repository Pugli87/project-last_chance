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
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: ${({ isSelected }) => (isSelected ? '#fc842d' : 'inherit')} !important;
`;

export const RadioInput = styled.input`
  margin-right: 5px;
  accent-color: #fc842d;
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
  margin: auto;
  margin-top: 40px;
`;
