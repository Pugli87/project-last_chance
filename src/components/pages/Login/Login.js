import React, { useState } from 'react';
import "./Login.css";
import { Link} from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/thunks';
import "./Login.css"

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);



    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(loginUser({email, password}))
      if (!email.trim()) {
        setEmailValid(false);
      } else {
        setEmailValid(true);
      }
  
  
      if (!password.trim()) {
        setPasswordValid(false);
      } else {
        setPasswordValid(true);
        
      }
  
      if (emailValid && passwordValid) {
        console.log('Correo:', email);
        console.log('Contraseña:', password);
      }
  };
  

  const Container = styled.div`
  max-width: 437px;
  margin-top: 100px;
  padding: 20px;
  left: 10px;
  top: 100px;


  @media screen and (max-width:320px) {
    width: 280px;
    margin-top: 32px;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  `;

  const Tittle = styled.h3`
    color: #FC842D;
    font-weight: 700;
    size: 14px;
    margin-bottom: 55px;
    }
  `;

  const SubTittle = styled.h3`
  color: #9B9FAA;
  font-weight: 700;
  size: 14px;
  margin-bottom: 15px;
  `;

  const Input = styled.input`
    width: 280px;
    margin-bottom: 10px;
    border-left: none;
    border-top: none;
    border-right: none;
    outline: none; 

  &:hover{
    border: 1px solid #FC842D;
    border-left: none;
    border-top: none;
    border-right: none;
  }
  `;

  const ContButton = styled.div`
    @media screen and (max-width:320px){
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    align-items: center;
    height: 110px;
    }
  `;

  const InputWanning = styled.input`
  width: 280px;
  height: 50px;
  margin-bottom: 10px;
  border: 1px solid red;
  border-left: none;
  border-top: none;
  border-right: none;
  outline: none;
  color: red;
  `;
	
  const ContFormCorreo = styled.div`
    width: 290px;
    margin-bottom: 15px;
    &:hover {
      h3 {
        color: #FC842D; 
      }

      input {
        border: 1px solid #FC842D;
        border-left: none;
        border-top: none;
        border-right: none;
      }
    }

    &:focus-within {
      h3 {
        color: #FC842D; 
      }

      input {
        border: 1px solid #FC842D;
        border-left: none;
        border-top: none;
        border-right: none;
      }
    }
  `;

  const ContFormContra = styled.div`
    width: 290px;
    &:hover {
      h3 {
        color: #FC842D; 
      }

    input {
      border: 1px solid #FC842D;
      border-left: none;
      border-top: none;
      border-right: none;
    }

    &:focus-within {
      h3 {
        color: #FC842D; 
      } 

      input {
        border: 1px solid #FC842D;
        border-left: none;
        border-top: none;
        border-right: none;
      }
    }
  `;

  const Button = styled.button`
    width: 181px;
    height: 44px;
    border: none;
    border-radius: 20px;
    margin-bottom: 18px;
    cursor: pointer;
    background-color: #FC842D;
    box-shadow: -5px 11px 6px -8px rgba(252,132,45,1);
  `;

  const TextButtonIniciar = styled.p`
    width: 80px; 
    color: #fff;
    margin: auto;
    font-weight: 700;
    font-size: 14px;
    line-height: 17.01px;
  `;

  const TextButtonCrear = styled.p`
    margin: auto;
    font-weight: 700;
    font-size: 14px;
    line-height: 17.01px;
    width: 108px;
    color: #FC842D;
    display: flex;
    justify-content: center;
    padding: 0;
  `;



  return (
    <Container>
      <Tittle>Iniciar sesión</Tittle>
      <form onSubmit={handleSubmit}>
        <ContFormCorreo>
        <SubTittle className='subTittle'>Correo Electronico*</SubTittle>
          {emailValid ? <Input 
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}

          /> : <InputWanning
          type="email"
          placeholder="El correo electronico es un campo obligatorio"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          }
        </ContFormCorreo>
        <ContFormContra >
        <SubTittle className='subTittle'>Contraseña*</SubTittle>
        {passwordValid ? <Input 
          type="password"
          placeholder=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          /> : <InputWanning
          type="password"
          placeholder="El correo electronico es un campo obligatorio"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
      }
        </ContFormContra>
        <ContButton>
          <Button type="submit">
            <TextButtonIniciar>INICIAR</TextButtonIniciar>
            <TextButtonIniciar>SESION</TextButtonIniciar>
          </Button>
          <Link
            to={'/register'}
            className='Button ButtonCrear'
          >
            <TextButtonCrear>CREAR UNA</TextButtonCrear>
            <TextButtonCrear>CUENTA</TextButtonCrear>
          </Link>
        </ContButton>
      </form>
    </Container>
  );
};

export default Login