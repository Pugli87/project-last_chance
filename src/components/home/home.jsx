import BackgroundComponent from 'components/background/background';
import Navigation from 'components/Navigation/navigation';
import { Container } from './home.styled';

const Home = () => {
  return (
    <Container>
      <Navigation></Navigation>
      <BackgroundComponent></BackgroundComponent>
    </Container>
  );
};
export default Home;
