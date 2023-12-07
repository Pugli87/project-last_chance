import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import './_NavLinkHeader.scss'
function NavLinkHeader({className, to, children}) {
    const location = useLocation()

    return (
        <Link
            className={`NavLinkHeader ${location.pathname === to ? '-active' : ''} ${className ? className : ''}`}
            to={to}
        >
            { children }
        </Link>
    )
}

NavLinkHeader.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
}

export default NavLinkHeader
