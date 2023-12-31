import Calculator from 'components/pages/Calculator/Calculator';
import Diary from 'components/pages/Diary/Diary';
import Home from 'components/pages/Home/Home';
import Login from 'components/pages/Login/Login';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import SignUp from 'components/pages/SignUp/SignUp';
import { useEffect } from 'react';

const AppRoutes = [
  {
    title: 'Home',
    name: 'home',
    path: '/',
    element: () => <Home />,
    checkAuth: false,
    redirectRoute: '/diary',
  },
  {
    title: 'Diary',
    name: 'diary',
    path: '/diary',
    element: () => <Diary />,
    checkAuth: true,
    redirectRoute: '/login',
  },
  {
    title: 'Calculator',
    name: 'calculator',
    path: '/calculator',
    element: () => <Calculator />,
    checkAuth: true,
    redirectRoute: '/login',
  },
  {
    title: 'Log In',
    name: 'logIn',
    path: '/login',
    element: () => <Login />,
    checkAuth: false,
    redirectRoute: '/diary',
  },
  {
    title: 'RegistrationForm',
    name: 'Registration Form',
    path: '/RegistrationForm',
    element: () => <RegistrationForm />,
    checkAuth: false,
    redirectRoute: '/diary',
  },
  {
    title: 'Sign Up',
    name: 'signUp',
    path: '/register',
    element: () => <SignUp />,
    checkAuth: false,
    redirectRoute: '/diary',
  },
  {
    title: 'Home',
    name: 'all',
    path: '*',
    element: () => <Home />,
    checkAuth: false,
    redirectRoute: '/diary',
  },
];

const AppRoutesContainer_ = ({ children }) => {
  useEffect(() => {
    window.myApp = {
      state: {
        isLoaded: true,
      },
    };
  }, []);
  return <>{children}</>;
};
export const AppRoutesContainer = AppRoutesContainer_;
export default AppRoutes;
