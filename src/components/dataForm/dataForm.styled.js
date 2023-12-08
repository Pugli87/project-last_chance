import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px;
  width: 608px;
  align-items: left;
`;

export const Title = styled.h2`
  font-family: Verdana;
  font-size: 34px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 60px;
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
`;

export const RadioInput = styled.input`
  margin-right: 5px;
  &: active {
    color: #fc842d;
    background-color: #fc842d;
  }
`;

export const Button = styled.button`
  box-shadow: 0px 4px 10px 0px #fc842d80;
  background-color: #fc842d;
  color: #fff;
  padding: 10px 15px;
  font-family: Verdana;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-align: center;
  font-size: 1em;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin: 50px 100px;

  &:hover {
    background-color: #fc842d80;
  }
`;
export const Form = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
