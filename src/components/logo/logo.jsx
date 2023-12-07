import logo from '../../logo.png';
import { Image } from './logo.styled';

const LogoComponent = () => {
  return (
    <div>
      <Image src={logo} alt="Logo de la aplicación" />
    </div>
  );
};
export default LogoComponent;
