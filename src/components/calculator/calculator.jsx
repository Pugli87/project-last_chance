import BackgroundComponent from 'components/background/background';
import Navigation from 'components/Navigation/navigation';
import { Container } from './calculator.styled';
import DataForm from 'components/dataForm/dataForm';

const Calculator = () => {
  return (
    <Container>
      <div>
        <Navigation></Navigation>
        <DataForm></DataForm>
      </div>

      <BackgroundComponent></BackgroundComponent>
    </Container>
  );
};
export default Calculator;
