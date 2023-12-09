import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import './_NavLinkHeader.scss'
function NavLinkHeader({className, to, onClick = ()=>{}, children}) {
    const location = useLocation()

    return (
        <div onClick={onClick}>
            <Link
                className={`NavLinkHeader ${location.pathname === to ? '-active' : ''} ${className ? className : ''}`}
                to={to}
            >
                { children }
            </Link>
        </div>
    )
}

NavLinkHeader.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
}

export default NavLinkHeader
