import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ title, redirectRoute, element, checkAuth }) => {
  const tokenStore = useSelector(state => state.auth.token);
  const [token, setToken] = useState(tokenStore); // para probar login
  
    useEffect(()=>{
      setToken(tokenStore)
    },[tokenStore])
  
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
