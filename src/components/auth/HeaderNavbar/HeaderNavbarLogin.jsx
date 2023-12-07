import React from 'react'
import logo_desktop from '../../../assets/images/logos/logo-desktop.png'
import './_HeaderNavbarLogin.scss'
import { Link } from 'react-router-dom'

function HeaderNavbarLogin() {
  return (
    <div className='HeaderNavbarLogin'>
      <img src={logo_desktop} alt="logo desktop" />
      <ul className='HeaderNavbarLogin__list'>
        <li className='pointer'>
          <Link
            className='links'
            to='/login'
          >
            Iniciar sesión
          </Link>
        </li>
        <li className='pointer'>
          <Link
            className='links'
            to='/register'
          >
            crear una cuenta
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HeaderNavbarLogin