import React, { useEffect, useState } from 'react';
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
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const handleYesClick = () => {
    dispatch(logOutUser());
    setShowModal(false);
  };

  useEffect(() => {
    const closeModal = event => {
      if (event.key === 'Escape') {
        setShowModal(false);
      }
    };
    document.addEventListener('keydown', closeModal);
    return () => {
      document.removeEventListener('keydown', closeModal);
    };
  }, []);

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
          title="¿ Estas seguro que deseas salir ?"
          onYesClick={handleYesClick}
          onNoClick={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default HeaderNavbar;
