import React, { useState } from 'react'
import NavLinkHeader from '../NavLinkHeader/NavLinkHeader'
import './_HeaderMenuMobile.scss'
function HeaderMenuMobile() {
    const [isActive, setIsActive] = useState(false)

    const handleIsActive = () => {
        setIsActive(!isActive)
    }
    return (
        <div className='HeaderMenuMobile__conatinerMenu'>
            <ul onClick={handleIsActive} className={`HeaderMenuMobile__burger-menu ${isActive ? '-active' : ''}`}>
                <li></li>
                <li></li>
                <li></li>
            </ul> 
            <ul className={`HeaderMenuMobile__menu ${isActive ? '-active' : ''}`}>
                <li className='pointer'>
                    <NavLinkHeader
                        onClick={handleIsActive}
                        to='/diary'
                    >
                        Diario
                    </NavLinkHeader>
                </li>
                <li className='pointer'>
                    <NavLinkHeader
                        onClick={handleIsActive}
                        to='/calculator'
                    >
                        Calculadora
                    </NavLinkHeader>
                </li>
            </ul>
        </div>
    )
}

export default HeaderMenuMobile