// HeaderNavbar.jsx
import React, { useState } from 'react';
import logo_desktop from '../../../assets/images/logos/logo-desktop.png';
import logo_tablet from '../../../assets/images/logos/logo-tablet.png';
import './_HeaderNavbar.scss';
import NavLinkHeader from '../NavLinkHeader/NavLinkHeader';
import { useDeviceDetect } from '../../../hooks/deviceDetect/useDeviceDetect';
import HeaderMenuMobile from '../HeaderMenuMobile/HeaderMenuMobile';
import { Link } from 'react-router-dom';
import Modal from '../../Modal/ModalCalculator';

function HeaderNavbar() {
  const { isDesktop, isMobile } = useDeviceDetect();
  const [showModal, setShowModal] = useState(false);

  const handleYesClick = () => {
    // Handle logic for 'Yes' button (redirect to homepage)
    // For now, simply redirect to '/'
    window.location.href = '/';
  };

  const handleNoClick = () => {
    // Handle logic for 'No' button (close the modal)
    setShowModal(false);
  };

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
                <li className="pointer">Nic</li>
                {/* ... (other menu items) */}
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
          <li className="pointer">Nic</li>
          {/* ... (other menu items) */}
        </ul>
      )}

      {showModal && (
        <Modal
          title="Are you sure you want to exit?"
          onYesClick={handleYesClick}
          onNoClick={handleNoClick}
        />
      )}
    </>
  );
}

export default HeaderNavbar;
