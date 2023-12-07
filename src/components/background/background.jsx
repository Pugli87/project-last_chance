import frame from '../../Frame.png';
import { Background } from './background.styled';

const BackgroundComponent = () => {
  return (
    <div>
      <Background src={frame} alt="fondo de la aplicación" />
    </div>
  );
};
export default BackgroundComponent;
