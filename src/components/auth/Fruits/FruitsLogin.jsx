import React from 'react'
import img_fruits_desktop from '../../../assets/images/fruits/img-fruits-desktop.png'
import img_fruits_tablet from '../../../assets/images/fruits/img-fruits-tablet.png'
import { globalIcons } from 'assets/icons/globalIcons'
import './FruitsLogin.scss'
import { useDeviceDetect } from 'hooks/deviceDetect/useDeviceDetect'
function FruitsLogin() {

  const { isDesktop } = useDeviceDetect()

  return (
    <div className='FruitsLogin'>
        <img src={isDesktop ? img_fruits_desktop : img_fruits_tablet} alt="img fruits" />
        <img src={globalIcons.complement_fruits} alt="complement fruits icon" />
    </div>
  )
}

export default FruitsLogin