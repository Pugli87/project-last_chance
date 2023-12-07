import React from 'react'
import img_leaves_desktop from '../../assets/images/leaves/img-leaves-desktop.png'
import img_leaves_tablet from '../../assets/images/leaves/img-leaves-tablet.png'
import { useDeviceDetect } from 'hooks/deviceDetect/useDeviceDetect'
import './_Fruits.scss'
function Fruits() {
  const { isDesktop } = useDeviceDetect()

  return (
    <div className='fruits'>
      <img src={ isDesktop ? img_leaves_desktop : img_leaves_tablet} alt="leaves" />
    </div>
  )
}

export default Fruits