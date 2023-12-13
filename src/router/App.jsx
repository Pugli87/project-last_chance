import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import GeneralLayout from '../components/Layout/GeneralLayout';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GeneralLayout>
          <AppRouter />
        </GeneralLayout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
