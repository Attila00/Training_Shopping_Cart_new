import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import './Header.scss';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Cart } from '../../Pages/Cart/Cart';
import { CartHeader } from '../../molecules/HeaderCard/CartHeader';
export default function Header(){
    // Used for text translation
    const {t} = useTranslation();
    let history = useHistory();
    React.useEffect(() => {
        history.push('/');
    },[]);
    //Function to update selected as per clicked element
    const updateActiveStatus = (e) =>{
        document.querySelector('.selected') && 
        document.querySelector('.selected').classList.remove('selected');
        (e.target.tagName === "A") ? 
        e.target.classList.add('selected') : 
        (e.target.tagName === "IMG" && document.querySelector('#header__nav-home-item_home-link').classList.add('selected'));
    };
    return (
    <header className="header">
        {/* Sub header for all navbar links. */}
        <nav className="header__subheader" onClick={updateActiveStatus}>
            <Link to="/">
                <Icon reqclass={`mainlogofit`} source="../../../assets/images/logo.png" alt="Application Logo"/>
            </Link>
            <nav className="header__nav-home-item">
                <Link id="header__nav-home-item_home-link" className="header__nav-home-item_home-link selected" to="/">{t('headernav.1')}</Link>
                <Link id="header__nav-home-item_products-link" className="header__nav-home-item_products-link"to="/products/All">{t('headernav.2')}</Link>
            </nav>
            <div className="header__nav-login-item">
                <nav className="header__nav-login-item_subheader">
                    <Link className="header__nav-login-item_subheader_login-link" to="/login">{t('headernav.3')}</Link>
                    <Link className="header__nav-login-item_subheader_register-link" to="/register">{t('headernav.4')}</Link>
                </nav>
                {/* Header Cart Component */}
                <CartHeader headerClass={`header__nav-login-item_cart`} />
            </div>
        </nav>
    </header>
    )
}