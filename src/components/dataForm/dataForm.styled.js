// Estilos en un archivo separado, por ejemplo: FormularioEstilos.js
import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px;
  position: absolute;
  width: 608px;
  margin-top: 60px;
`;

export const Title = styled.h2`
  font-family: Verdana;
  font-size: 34px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: left;
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

export const Form = styled.div`
  display: flex;
  justify-content: start;
  align-items: space-around;
  flex-wrap: wrap;
  margin-top: 70px;
`;
export const BoxButton = styled.div`
  margin: auto;
  margin-top: 40px;
`;
