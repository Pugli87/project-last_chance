import React from 'react';
import img_leaves_desktop from '../../assets/images/leaves/img-leaves-desktop.png';
import img_leaves_tablet from '../../assets/images/leaves/img-leaves-tablet.png';
import { useDeviceDetect } from 'hooks/deviceDetect/useDeviceDetect';
import './_Fruits.scss';
import ListnotFood from 'components/ListnotFood/ListnotFood';
import DateComponnet from 'components/DateComponent/DateComponent';
function Fruits() {
  const { isDesktop, isMobile } = useDeviceDetect();

  return (
    <div className="fruits">
      {!isMobile && (
        <img
          src={isDesktop ? img_leaves_desktop : img_leaves_tablet}
          alt="leaves"
        />
      )}
      <div className="container">
        <DateComponnet />
        <ListnotFood />
      </div>
    </div>
  );
}

export default Fruits;
