import React, { useEffect, useState, useCallback, useRef } from 'react';
import logo_desktop from '../../../assets/images/logos/logo-desktop.png';
import logo_tablet from '../../../assets/images/logos/logo-tablet.png';
import './_HeaderNavbar.scss';
import NavLinkHeader from '../NavLinkHeader/NavLinkHeader';
import { useDeviceDetect } from '../../../hooks/deviceDetect/useDeviceDetect';
import HeaderMenuMobile from '../HeaderMenuMobile/HeaderMenuMobile';
import { Link } from 'react-router-dom';
import { useDispatch, /*, useSelector*/ 
useSelector} from 'react-redux';
import { logOutUser } from '../../../redux/thunks';
import Modal from '../../Modal/ModalCalculator';

function HeaderNavbar() {
  const { isDesktop, isMobile } = useDeviceDetect();
  const user = useSelector(state => state.auth.userInfo);
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const inactivityTimeoutRef = useRef(null);
  let removeTokenTimeout; // Nuevo temporizador para eliminar el token después de 5 segundos

  const handleYesClick = () => {
    dispatch(logOutUser());
    setShowModal(false);
    localStorage.removeItem('token');
  };

  const resetInactivityTimeout = useCallback(() => {
    clearTimeout(inactivityTimeoutRef.current);

    // Reinicia el temporizador después de cada interacción del usuario
    inactivityTimeoutRef.current = setTimeout(() => {
      // Cierra sesión automáticamente después de 10 segundos de inactividad
      dispatch(logOutUser());
      // Elimina el token del almacenamiento local después de cerrar sesión
      localStorage.removeItem('token');
      setShowModal(false);
    }, 10000); 

    // Reinicia el temporizador para eliminar el token después de 5 segundos
    startRemoveTokenTimeout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleEscape = useCallback(event => {
    if (event.key === 'Escape') {
      setShowModal(false);
    }
  }, []);

  const startRemoveTokenTimeout = () => {
    clearTimeout(removeTokenTimeout);

    // Establece el temporizador para eliminar el token después de 5 segundos
    removeTokenTimeout = setTimeout(() => {
      localStorage.removeItem('token');
    }, 5000); // 5 segundos en milisegundos
  };

  useEffect(() => {
    const handleInteraction = () => {
      resetInactivityTimeout();
    };

    const handleKeyDown = event => {
      handleInteraction();
      handleEscape(event);
    };

    // Agrega eventos de detección de actividad
    document.addEventListener('mousemove', handleInteraction);
    document.addEventListener('keydown', handleKeyDown);

    // Inicia el temporizador para renovar el token cada 5 segundos
    /*const tokenRefreshInterval = setInterval(() => {
      dispatch(refreshToken());
    }, 5000);*/

    // Establece el temporizador de inactividad al cargar la página
    resetInactivityTimeout();

    // Limpia los temporizadores y eventos cuando el componente se desmonta
    return () => {
      clearTimeout(removeTokenTimeout); // Limpia el temporizador adicional
      clearTimeout(inactivityTimeoutRef.current);
      document.removeEventListener('mousemove', handleInteraction);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    dispatch,
    token,
    resetInactivityTimeout,
    handleEscape,
    removeTokenTimeout,
  ]);

  return (
    <>
      <div className="HeaderNavbar">
        <Link to="/diary">
          <img
            src={isDesktop ? logo_desktop : logo_tablet}
            alt="logo desktop"
          />
        </Link>
        <div className="HeaderNavbar__wrapper">
          {isDesktop && (
            <ul className="HeaderNavbar__list-navbar">
              <li className="pointer">
                <NavLinkHeader to="/diary">Diario</NavLinkHeader>
              </li>
              <li className="pointer">
                <NavLinkHeader to="/calculator">Calculadora</NavLinkHeader>
              </li>
            </ul>
          )}
          <div className="HeaderNavbar__box">
            {!isMobile && (
              <ul className="HeaderNavbar__list-menu">
                <li className="pointer" onClick={() => setShowModal(true)}>
                  Salir
                </li>
                <li className="pointer">{user.name}</li>
              </ul>
            )}
            {!isDesktop && <HeaderMenuMobile />}
          </div>
        </div>
      </div>
      {isMobile && (
        <ul className="HeaderNavbar__list-menu">
          <li className="pointer" onClick={() => setShowModal(true)}>
            Salir
          </li>
          <li className="HeaderNavbar__item-separator"></li>
          <li className="pointer">{user.name}</li>
          {/* ... (other menu items) */}
        </ul>
      )}

      {showModal && (
        <Modal
          title="¿Estas seguro que deseas salir?"
          onYesClick={handleYesClick}
          onNoClick={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default HeaderNavbar;

