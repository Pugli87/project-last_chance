import {
  FormContainer,
  Title,
  SubTitle,
  FormGroup,
  Label,
  Input,
} from './LoginForm.styled';
const LoginForm = () => {
  return (
    <FormContainer>
      <Title>Crear una cuenta</Title>
      <SubTitle>Ingrese sus datos:</SubTitle>

      <FormGroup>
        <Label htmlFor="nombre">Nombre:</Label>
        <Input type="text" id="nombre" name="nombre" />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="correo">Correo Electrónico:</Label>
        <Input type="email" id="correo" name="correo" />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="contrasena">Contraseña:</Label>
        <Input type="password" id="contrasena" name="contrasena" />
      </FormGroup>
    </FormContainer>
  );
};

export default LoginForm;
