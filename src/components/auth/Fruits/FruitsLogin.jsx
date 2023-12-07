import React from 'react'
import img_fruits_desktop from '../../../assets/images/fruits/img-fruits-desktop.png'
import img_fruits_tablet from '../../../assets/images/fruits/img-fruits-tablet.png'
import { globalIcons } from 'assets/icons/globalIcons'
import './FruitsLogin.scss'
function FruitsLogin() {
  return (
    <div className='FruitsLogin'>
        <img src={img_fruits_desktop} alt="img fruits" />
        <img src={globalIcons.complement_fruits} alt="complement fruits icon" />
    </div>
  )
}

export default FruitsLogin