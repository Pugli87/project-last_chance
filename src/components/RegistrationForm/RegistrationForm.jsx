import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FormContainer,
  Title,
  SubTitle,
  FormGroup,
  Label,
  Input,
  ContButton,
  BtnRegister,
  BtnLogin,
  TextButtonRegister,
  TextButtonLogin,
} from './RegistrationForm.styled';
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    contrasena: '',
  });
  const [formErrors, setFormErrors] = useState({
    nombre: false,
    correo: false,
    contrasena: false,
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Validación de campos
    const errors = {};
    Object.keys(formData).forEach(key => {
      if (formData[key].trim() === '') {
        errors[key] = true;
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      console.log('Registro exitoso:', formData);
      setFormData({
        nombre: '',
        correo: '',
        contrasena: '',
      });
      setFormErrors({
        nombre: false,
        correo: false,
        contrasena: false,
      });
    }
  };

  const navigate = useNavigate();
  const handleLoginClick = () => {
    console.log('Login button clicked');
    navigate('/login');
  };
  return (
    <FormContainer>
      <Title>CREAR UNA CUENTA</Title>
      <SubTitle>CREAR UNA CUENTA</SubTitle>
      <FormGroup>
        <Label htmlFor="nombre">Nombre *</Label>
        <Input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          style={{ borderColor: formErrors.nombre ? 'red' : '' }}
        />
        {formErrors.nombre && (
          <p style={{ color: 'red' }}>El nombre es requerido</p>
        )}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="correo">Correo Electrónico *</Label>
        <Input
          type="email"
          id="correo"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          style={{ borderColor: formErrors.correo ? 'red' : '' }}
        />
        {formErrors.correo && (
          <p style={{ color: 'red' }}>El correo es requerido</p>
        )}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="contrasena">Contraseña *</Label>
        <Input
          type="password"
          id="contrasena"
          name="contrasena"
          value={formData.contrasena}
          onChange={handleChange}
          style={{ borderColor: formErrors.contrasena ? 'red' : '' }}
        />
        {formErrors.contrasena && (
          <p style={{ color: 'red' }}>La contraseña es requerida</p>
        )}
      </FormGroup>

      <ContButton>
        <BtnRegister type="submit" onClick={handleSubmit}>
          <TextButtonRegister>Register</TextButtonRegister>
        </BtnRegister>
        <BtnLogin onClick={handleLoginClick} variant="contained">
          <TextButtonLogin>Login</TextButtonLogin>
        </BtnLogin>
      </ContButton>
    </FormContainer>
  );
};
export default RegistrationForm;
