import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';
//import { useState } from 'react'; // para probar login
const ProtectedRoute = ({ title, redirectRoute, element, checkAuth }) => {
  const token = useSelector(state => state.auth.token);
  const userInfo = useSelector(state => state.auth.userInfo);

  useEffect(() => {
    console.log('nuevo userInfo ok', userInfo);
  }, [userInfo]);

  useEffect(() => {
    console.log('nuevo token ok', token);
  }, [token]);

  //const [token] = useState(true); // para probar login
  try {
    document.title = (title ? title + ' | ' : '') + 'SlimMom'; //modifica el titulo de la page
  } catch (e) {}

  if (checkAuth && !token) {
    return <Navigate to={redirectRoute} replace />;
  }

  if (!checkAuth && token) {
    return <Navigate to={redirectRoute} replace />;
  }

  return <>{element}</>;
};

export default ProtectedRoute;
