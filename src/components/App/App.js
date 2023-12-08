import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { authOperations, authSelectors } from '../../redux/auth';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeLight, ThemeDark } from 'ruta/donde/se/encuentran/tus/temas'; // Ajusta la ruta según sea necesario
import { GlobalStyles } from 'ruta/donde/se/encuentran/tus/estilos'; // Ajusta la ruta según sea necesario
import { MainLoader } from 'ruta/donde/se/encuentra/MainLoader'; // Ajusta la ruta según sea necesario
import { PublicRoute } from 'ruta/donde/se/encuentra/PublicRoute'; // Ajusta la ruta según sea necesario
import { themeSelectors } from 'ruta/donde/se/encuentran/tus/selectores'; // Ajusta la ruta según sea necesario

const RegistrationPage = lazy(() => import('../../pages/RegistrationPage'));

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  const isTheme = useSelector(themeSelectors.getTheme);
  const currentTheme = !isTheme ? ThemeLight : ThemeDark;

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <ThemeProvider theme={currentTheme}>
          <Global styles={GlobalStyles} />
          <Suspense fallback={<MainLoader theme={currentTheme} />}>
            <Route
              path="/register" // Corregí la ruta para que coincida con el ejemplo
              element={
                <PublicRoute restricted redirectTo="/calculator">
                  <RegistrationPage />
                </PublicRoute>
              }
            />
          </Suspense>
        </ThemeProvider>
      </>
    )
  );
}
