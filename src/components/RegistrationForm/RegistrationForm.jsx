import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUpUser } from '../../redux/thunks';

import {
  FormContainer,
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
import { useDispatch } from 'react-redux';

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

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    console.log('Submit button clicked');
    e.preventDefault();

    const errors = {};


    Object.keys(formData).forEach(key => {
      if (formData[key].trim() === '') {
        errors[key] = true;
      }
      if(formData.contrasena.length < 8) {
        errors.contrasena = true
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      console.log(
        'Tiene datos sin diligenciar,Por favor complete todos los campos.'
      );
    } else {
      console.log('Registro exitoso:', formData);
      dispatch(
        signUpUser({
          name: formData.nombre,
          email: formData.correo,
          password: formData.contrasena,
        })
      );
      resetForm();
    }
  };

  const resetForm = () => {
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
  };

  const navigate = useNavigate();
  const handleLoginClick = () => {
    console.log('Login button clicked');
    navigate('/Login');
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
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
            <p
              style={{
                color: 'red',
                marginTop: '5px',
                fontSize: '9px',
                fontFamily: 'Verdana',
                fontWeight: 400,
              }}
            >
              El nombre es requerido
            </p>
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
            <p
              style={{
                color: 'red',
                marginTop: '5px',
                fontSize: '9px',
                fontFamily: 'Verdana',
                fontWeight: 400,
              }}
            >
              El correo es requerido
            </p>
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
            <p
              style={{
                color: 'red',
                marginTop: '5px',
                fontSize: '9px',
                fontFamily: 'Verdana',
                fontWeight: 400,
              }}
            >
              La contraseña debe ser de 8 o más caracteres
            </p>
          )}
        </FormGroup>

        <ContButton>
          <BtnRegister type="submit">
            <TextButtonRegister>Crear cuenta</TextButtonRegister>
          </BtnRegister>
          <BtnLogin onClick={handleLoginClick} variant="contained">
            <TextButtonLogin>Iniciar Sesión</TextButtonLogin>
          </BtnLogin>
        </ContButton>
      </form>
    </FormContainer>
  );
};

export default RegistrationForm;
