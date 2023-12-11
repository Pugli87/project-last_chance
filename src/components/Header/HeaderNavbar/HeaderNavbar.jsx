import React from 'react'
import logo_desktop from '../../../assets/images/logos/logo-desktop.png'
import logo_tablet from '../../../assets/images/logos/logo-tablet.png'
import './_HeaderNavbar.scss'
import NavLinkHeader from '../NavLinkHeader/NavLinkHeader'
import { useDeviceDetect } from '../../../hooks/deviceDetect/useDeviceDetect'
import HeaderMenuMobile from '../HeaderMenuMobile/HeaderMenuMobile'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOutUser } from '../../../redux/thunks'

function HeaderNavbar() {
  const { isDesktop, isMobile } = useDeviceDetect()
  const token = useSelector((state) => state.auth.token)
  const dispatch = useDispatch()



  return (
    <>
      <div className='HeaderNavbar'>
        <Link
          to='/diary'
        >
          <img src={isDesktop ? logo_desktop : logo_tablet} alt="logo desktop" />
        </Link>
        <div className='HeaderNavbar__wrapper'>
          {isDesktop && <ul className='HeaderNavbar__list-navbar'>
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
          </ul>}
          <div className='HeaderNavbar__box'>
            { !isMobile && <ul className='HeaderNavbar__list-menu'>
              <li className='pointer'>
                  Nic
              </li>
              <li className='pointer' onClick={()=>dispatch(logOutUser(token))}>
                Salir
              </li>
            </ul> }
            { !isDesktop && <HeaderMenuMobile />}
          </div>
        </div>
      </div>
      { isMobile && <ul className='HeaderNavbar__list-menu'>
        <li className='pointer'>
            Nic
        </li>
        <li className='HeaderNavbar__item-separator'></li>
        <li className='pointer' onClick={()=>dispatch(logOutUser(token))}>
          Salir
        </li>
      </ul> }
    </>
  )
}

export default HeaderNavbar