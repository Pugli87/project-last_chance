import React from 'react';
import {
  FormContainer,
  Title,
  SubTitle,
  FormGroup,
  Label,
  Input,
  //
  ContButton,
  BtnRegister,
  BtnLogin,
  TextButtonRegister,
  TextButtonLogin,
  TextButton,
} from './RegistrationForm.styled';
const RegistrationForm = () => {
  /**/
  const handleRegisterClick = () => {
    // Implement the logic for registration/authentication here
    console.log('Register button clicked');
  };

  const handleLoginClick = () => {
    // Implement the logic for navigating to the login page here
    console.log('Login button clicked');
  };
  //
  return (
    <FormContainer>
      <Title>CREAR UNA CUENTA</Title>
      <SubTitle>CREAR UNA CUENTA</SubTitle>
      <FormGroup>
        <Label htmlFor="nombre">Nombre *</Label>
        <Input type="text" id="nombre" name="nombre" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="correo">Correo Electrónico *</Label>
        <Input type="email" id="correo" name="correo" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="contrasena">Contraseña *</Label>
        <Input type="password" id="contrasena" name="contrasena" />
      </FormGroup>

      <ContButton>
        <BtnRegister onClick={handleRegisterClick}>
          <TextButtonRegister>Register</TextButtonRegister>
        </BtnRegister>
        <BtnLogin onClick={handleLoginClick}>
          <TextButtonLogin>Login</TextButtonLogin>
        </BtnLogin>
      </ContButton>
    </FormContainer>
  );
};
export default RegistrationForm;
