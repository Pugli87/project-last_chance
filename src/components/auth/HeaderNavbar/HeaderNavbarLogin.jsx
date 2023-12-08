import React, { useEffect } from 'react'
import logo_desktop from '../../../assets/images/logos/logo-desktop.png'
import logo_tablet from '../../../assets/images/logos/logo-tablet.png'
import logo_mobile from '../../../assets/images/logos/logo-mobile.png'
import './_HeaderNavbarLogin.scss'
import NavLinkHeader from 'components/NavLinkHeader/NavLinkHeader'
import { useDeviceDetect } from 'hooks/deviceDetect/useDeviceDetect'

function HeaderNavbarLogin() {
  const { isTablet, isDesktop } = useDeviceDetect()

  return (
    <div className='HeaderNavbarLogin'>
      <div className='HeaderNavbarLogin__wrapper'>
        <img src={isDesktop ? logo_desktop : isTablet ? logo_tablet : logo_mobile} alt="logo desktop" />
        <ul className='HeaderNavbarLogin__list'>
          <li className='pointer'>
            <NavLinkHeader
              to='/login'
            >
              Iniciar sesión
            </NavLinkHeader>
          </li>
          <li className='pointer'>
            <NavLinkHeader
              to='/register'
            >
              crear una cuenta
            </NavLinkHeader>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderNavbarLogin