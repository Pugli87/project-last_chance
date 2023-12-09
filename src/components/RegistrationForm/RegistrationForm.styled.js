import styled from 'styled-components';
import { Box } from '@mui/material'; // Importa el componente Box de Material-UI
import { Link } from 'react-router-dom'; // Importa el componente Link de react-router-dom

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
export const AuthForm = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 280px;
`;
export const BtnWrapp = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 182px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  cursor: pointer;

  &:not(:last-child) {
    margin-top: 40px;
    margin-bottom: 20px;
  }

  color: ${props => props.theme.fontColors.buttonPrimary};
  background: ${props => props.theme.backgrounds.buttonPrimary};
  border: none;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  transition: transform ${props => props.theme.transitions.primary},
    background-color ${props => props.theme.transitions.primary};

  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: ${props => props.theme.hovers.secondary};
  }
`;
export const FormTitle = styled.h1`
  font-family: 'GothamproBold';
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 60px;
  color: ${props => props.theme.fontColors.modify};
`;
export const FormFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
`;
export const ButtonLink = styled(Link)`
  width: 182px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  letter-spacing: 0.04em;
  cursor: pointer;

  color: ${props => props.theme.fontColors.buttonSecondary};
  background: ${props => props.theme.backgrounds.buttonSecondary};
  border: 2px solid ${props => props.theme.backgrounds.buttonPrimary};
  border-radius: 30px;
  transition: transform ${props => props.theme.transitions.primary};

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
