import React, { useEffect } from 'react'
import logo_desktop from '../../../assets/images/logos/logo-desktop.png'
import './_HeaderNavbarLogin.scss'
import NavLinkHeader from 'components/NavLinkHeader/NavLinkHeader'
import { useDeviceDetect } from 'hooks/deviceDetect/useDeviceDetect'

function HeaderNavbarLogin() {
  const { isMobile, isTablet, isDesktop } = useDeviceDetect()

  useEffect(()=>{
    console.log("isMobile:", isMobile)
    console.log("isTablet:", isTablet)
    console.log("isDesktop:", isDesktop)
  },[isMobile, isTablet, isDesktop])
  return (
    <div className='HeaderNavbarLogin'>
      <div className='HeaderNavbarLogin__wrapper'>
        <img src={logo_desktop} alt="logo desktop" />
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