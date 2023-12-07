import BackgroundComponent from 'components/background/background';
import Navigation from 'components/Navigation/navigation';
import { Container } from './home.styled';
import Spinner from 'components/spinner/spinner';

const Home = () => {
  return (
    <Container>
      <div>
        <Navigation></Navigation>
        <Spinner></Spinner>
      </div>

      <BackgroundComponent></BackgroundComponent>
    </Container>
  );
};
export default Home;
