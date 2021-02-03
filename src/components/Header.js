import React from 'react';
import './Header.css'

class Header extends React.Component {
    render () {
        return (
            <div className="header__top">
                <div className="header__top-title">Weather App</div>
            </div>
        )
    }
}

export default Header