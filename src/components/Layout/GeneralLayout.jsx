import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderNavbar from '../Header/HeaderNavbar/HeaderNavbar';
import HeaderNavbarLogin from '../auth/HeaderNavbar/HeaderNavbarLogin';
import FruitsLogin from '../auth/Fruits/FruitsLogin';
import Fruits from '../Fruits/Fruits';
import { useDeviceDetect } from '../../hooks/deviceDetect/useDeviceDetect';
import './_GeneralLayout.scss';
import Loader from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const GeneralLayout = ({ children }) => {
  const location = useLocation();
  const { isMobile } = useDeviceDetect();

  const loading = useSelector(state => state.auth.isLoading);
  const error = useSelector(state => state.auth.error);

  const ROUTES_WHERE_NOT_SHOWN_HEADER_AUTH = [
    //rutas donde nos se ven el headerLogin
    '/diary',
    '/calculator',
  ];

  const showComponent = useMemo(() => {
    const shouldHide = ROUTES_WHERE_NOT_SHOWN_HEADER_AUTH.some(route => {
      return location.pathname === route;
    });

    return !shouldHide;
  }, [location.pathname, ROUTES_WHERE_NOT_SHOWN_HEADER_AUTH]); //se agrego , {ROUTES_WHERE_NOT_SHOWN_HEADER_AUTH} que mando error en el despliegue

  useEffect(() => {
    if (error)
      return Notify.failure(error, {
        backOverlay: true,
        fontSize: '16px',
        fontFamily: 'Verdana',
        cssAnimationStyle: 'from-right',
      });
  }, [error]);

  return (
    <div className="GeneralLayout containerDefault">
      {showComponent ? (
        <>
          <div className="contentLayout">
            <HeaderNavbarLogin />
          </div>
          {!isMobile && <FruitsLogin />}
        </>
      ) : (
        <>
          <div className="contentLayout">
            <HeaderNavbar />
          </div>
        </>
      )}
      <div className="contentLayout appLayout">{children}</div>
      {!showComponent && <Fruits />}
      <Loader variant="circle" active={loading} />
    </div>
  );
};
export default GeneralLayout;
