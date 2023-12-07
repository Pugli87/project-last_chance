import React from 'react'
import logo_desktop from '../../assets/images/logos/logo-desktop.png'
import './_HeaderNavbar.scss'
import NavLinkHeader from 'components/NavLinkHeader/NavLinkHeader'

function HeaderNavbar() {
  return (
    <>
      <div className='HeaderNavbar'>
        <img src={logo_desktop} alt="logo desktop" />
        <div className='HeaderNavbar__wrapper'>
          <ul className='HeaderNavbar__list-navbar'>
            <li className='pointer'>
              <NavLinkHeader
                to='/diary'
              >
                Diario
              </NavLinkHeader>
            </li>
            <li className='pointer'>
              <NavLinkHeader
                to='/calculator'
              >
                Calculadora
              </NavLinkHeader>
            </li>
          </ul>
          <ul className='HeaderNavbar__list-menu'>
            <li className='pointer'>
                Nic
            </li>
            <li className='pointer'>
              Salir
            </li>
          </ul>
        </div>
      </div>
      <div className='backdrop-gray'></div>
    </>
  )
}

export default HeaderNavbar