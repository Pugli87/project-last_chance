import React from 'react'
import img_fruits from '../../../assets/images/img-fruits.png'
import { globalIcons } from 'assets/icons/globalIcons'
import './FruitsLogin.scss'
function FruitsLogin() {
  return (
    <div className='FruitsLogin'>
        <img src={img_fruits} alt="img fruits" />
        <img src={globalIcons.complement_fruits} alt="complement fruits icon" />
    </div>
  )
}

export default FruitsLogin