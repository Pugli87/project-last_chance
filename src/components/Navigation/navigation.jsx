import LogoComponent from 'components/logo/logo';
import {
  ContainerNavigation,
  NavigationLink,
} from 'components/Navigation/navigation.styled';

const Navigation = () => {
  return (
    <ContainerNavigation>
      <LogoComponent></LogoComponent>
      <NavigationLink to="/login">LOG IN </NavigationLink>
      <NavigationLink to="/register">REGISTRATION</NavigationLink>
    </ContainerNavigation>
  );
};
export default Navigation;
