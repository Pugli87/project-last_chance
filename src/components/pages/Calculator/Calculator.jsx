import { Container } from './calculator.styled';
import DataForm from '../../DataForm/DataForm';
import { Button } from 'components/Button/Button';
import Loader from '../../Loader/Loader';

const Calculator = () => {
  return (
    <Container>
      <div>
        <DataForm></DataForm>
        <Button type="submit" text="Comienza a perder peso" />
      </div>
    </Container>
  );
};
export default Calculator;
