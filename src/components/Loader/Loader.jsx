import React from 'react'
import PropTypes from 'prop-types'
import './_Loader.scss'

const Loader = ({variant = 'points', active = false}) => {
    return <>
        { variant === 'points' ? <span className="loader__points"></span> :
            active && 
            <div className='loader__wrapper'>
                <div className={`backdrop ${active ? '-active' : ''}`}></div>
                <span className="loader__circle"></span>
            </div>
        }
    </>
}

Loader.propTypes = {
    variant: PropTypes.string,
    active: PropTypes.bool,
}

export default Loader
