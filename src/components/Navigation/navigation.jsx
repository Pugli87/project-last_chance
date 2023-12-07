import LogoComponent from 'components/logo/logo';
import {
  ContainerNavigation,
  NavigationLink,
} from 'components/Navigation/navigation.styled';

const Navigation = () => {
  return (
    <ContainerNavigation>
      <LogoComponent></LogoComponent>
      <NavigationLink to="/login">INICIAR SESION </NavigationLink>
      <NavigationLink to="/register">CREAR UNA CUENTA</NavigationLink>
    </ContainerNavigation>
  );
};
export default Navigation;
