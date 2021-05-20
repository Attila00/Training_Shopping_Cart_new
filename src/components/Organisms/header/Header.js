import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import './Header.scss';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
export default function Header(){
    // Used for text translation
    const {t, i18n} = useTranslation();
    return (
    <header className="header">
        {/* Sub header for all navbar links. */}
        <nav className="header__subheader">
            <Link to="/">
                <Icon reqclass={`mainlogofit`} source="../../../assets/images/logo.png" alt="Application Logo"/>
            </Link>
            <nav className="header__nav-home-item">
                <Link className="header__nav-home-item_home-link" to="/">{t('headernav.1')}</Link>
                <Link className="header__nav-home-item_products-link"to="/products/All">{t('headernav.2')}</Link>
            </nav>
            <section className="header__nav-login-item">
                <nav className="header__nav-login-item_subheader">
                    <Link className="header__nav-login-item_subheader_login-link" to="/login">{t('headernav.3')}</Link>
                    <Link className="header__nav-login-item_subheader_register-link" to="/register">{t('headernav.4')}</Link>
                </nav>
                {/* Section for Cart Component */}
                <section className="header__nav-login-item_cart">
                   {/* <span>0 items</span> */}
                </section>
            </section>
        </nav>
    </header>
    )
}