import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      // Al menos un campo está vacío, establecer errores y detener el registro
      setFormErrors(errors);
    } else {
      // Todos los campos están llenos, continuar con el registro (puedes enviar los datos al servidor aquí)
      console.log('Registro exitoso:', formData);
      // También puedes reiniciar el formulario si es necesario
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
    // Redirigir a la página de inicio de sesión
    navigate('/src/components/pages/Login');
    // Aquí podrías redirigir a la página de inicio de sesión o ejecutar alguna otra lógica de inicio de sesión
  };

  //
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
