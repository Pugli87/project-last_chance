import React from 'react';
import {
  FormContainer,
  Title,
  SubTitle,
  FormGroup,
  Label,
  Input,
} from './RegistrationForm.styled';

const RegistrationForm = () => {
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
    </FormContainer>
  );
};

export default RegistrationForm;
