import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/thunks';
import {
  Container,
  Tittle,
  SubTittle,
  Input,
  ContButton,
  InputWanning,
  ContFormCorreo,
  ContFormContra,
  Button,
  TextButtonIniciar,
  TextButtonCrear,
  ButtonCrear,
  WarningText,
} from './Login.styled';

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));

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

  return (
    <Container>
      <Tittle>Iniciar sesión</Tittle>
      <form onSubmit={handleSubmit}>
        <ContFormCorreo>
          <SubTittle>Correo Electronico*</SubTittle>
          {emailValid ? (
            <Input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          ) : (
            <>
              <InputWanning
                type="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <WarningText>
                El correo electrónico es un campo obligatorio
              </WarningText>
            </>
          )}
        </ContFormCorreo>
        <ContFormContra>
          <SubTittle>Contraseña*</SubTittle>
          {passwordValid ? (
            <Input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          ) : (
            <>
              <InputWanning
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <WarningText>La contraseña es un campo obligatorio</WarningText>
            </>
          )}
        </ContFormContra>
        <ContButton>
          <Button type="submit">
            <TextButtonIniciar>INICIAR</TextButtonIniciar>
            <TextButtonIniciar>SESION</TextButtonIniciar>
          </Button>
          <ButtonCrear>
            <Link to={'/register'} className="Button ButtonCrear">
              <TextButtonCrear>CREAR UNA</TextButtonCrear>
              <TextButtonCrear>CUENTA</TextButtonCrear>
            </Link>
          </ButtonCrear>
        </ContButton>
      </form>
    </Container>
  );
};

export default Login;
