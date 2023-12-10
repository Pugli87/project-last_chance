import React from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import {
  Wrapper,
  FormTitle,
  FormFlexContainer,
  BtnWrapp,
  AuthForm,
  Button,
  ButtonLink,
  FormContainer,
  Title,
  SubTitle,
  FormGroup,
  Label,
  Input,
} from './RegistrationForm.styled';

const RegistrationForm = () => {
  const { t } = useTranslation();

  const formik = useFormik({});

  const btnRegister = <Button type="submit">{t('auth.register')}</Button>;

  const btnLogin = <ButtonLink to="/login">{t('auth.login')}</ButtonLink>;

  const btnWrapp = (
    <BtnWrapp>
      {btnRegister}
      {btnLogin}
    </BtnWrapp>
  );

  return (
    <FormContainer>
      <Wrapper>
        <FormTitle>{t('auth.registerTitle')}</FormTitle>
        <AuthForm
          noValidate
          component="form"
          autoComplete="on"
          onSubmit={formik.handleSubmit}
        >
          <FormFlexContainer>
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
          </FormFlexContainer>
          {btnWrapp}
        </AuthForm>
      </Wrapper>
    </FormContainer>
  );
};

export default RegistrationForm;
//
