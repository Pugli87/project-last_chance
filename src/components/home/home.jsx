import BackgroundComponent from 'components/background/background';
import Navigation from 'components/Navigation/navigation';
import { Container } from './home.styled';

const Home = () => {
  return (
    <Container>
      <div>
        <Navigation></Navigation>
      </div>

      <BackgroundComponent></BackgroundComponent>
    </Container>
  );
};
export default Home;
