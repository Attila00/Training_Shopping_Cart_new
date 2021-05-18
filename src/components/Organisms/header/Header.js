import React from 'react';
import Icon from '../../atoms/Icon';
import './Header.scss';
import {Link} from 'react-router-dom';
export default function Header(){
    return (
    <header className="header">
        <div className="header__subheader">
            <Icon source="../../../assets/images/logo.png" alt="Application Logo"/>
            <div className="header__navhome">
                <span className="header__navhome_item"><Link to="/">Home</Link></span>
                <span className="header__navhome_item"><Link to="/products">Products</Link></span>
            </div>
            <div className="header__navlogin">
                <span className="header__navlogin_item"><Link to="/signup">Signup</Link></span>
                <span className="header__navlogin_item"><Link to="/register">Register</Link></span>
            </div>
        </div>
    </header>
    )
}