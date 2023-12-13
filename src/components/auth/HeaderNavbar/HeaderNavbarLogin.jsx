import React from 'react'
import logo_desktop from '../../../assets/images/logos/logo-desktop.png'
import logo_tablet from '../../../assets/images/logos/logo-tablet.png'
import logo_mobile from '../../../assets/images/logos/logo-mobile.png'
import NavLinkHeader from '../../Header/NavLinkHeader/NavLinkHeader'
import { useDeviceDetect } from '../../../hooks/deviceDetect/useDeviceDetect'
import './_HeaderNavbarLogin.scss'
import { Link } from 'react-router-dom'

function HeaderNavbarLogin() {
  const { isTablet, isDesktop } = useDeviceDetect()

  return (
    <div className='HeaderNavbarLogin'>
      <div className='HeaderNavbarLogin__wrapper'>
        <Link
          to='/'
        >
          <img src={isDesktop ? logo_desktop : isTablet ? logo_tablet : logo_mobile} alt="logo desktop" />
        </Link>
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