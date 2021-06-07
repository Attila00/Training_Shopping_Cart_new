import React, { useContext } from 'react';
import Icon from '../../atoms/Icon/Icon';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { CartHeader } from '../../molecules/HeaderCard/CartHeader';
import { GlobalContext } from '../../../Context/globalContext';
import { isNotUndefined } from '../../../utils/utils';
export default function Header(){
    let location = useLocation();
    const [selected, setSelected] = React.useState('/');
    const { globalState:{isUser} } = useContext(GlobalContext);
    // Used for text translation
    const {t} = useTranslation();
    
    //For updating selected as per clicked element
    React.useEffect(() => {
        setSelected(location.pathname.split('/')[1]);
    },[location.pathname]);

    return (
    <header className="header">
        {/* Sub header for all navbar links. */}
        <nav className="header__subheader">
            <Link to="/">
                <Icon reqclass={`mainlogofit`} source="../../../assets/images/logo.png" alt="Sabka Bazaar Application Image"/>
            </Link>
            <nav className="header__nav-home-item">
                <Link id="header__nav-home-item_home-link" className={`header__nav-home-item_home-link ${selected == ""?'selected':''}`} to="/">{t('headernav.1')}</Link>
                <Link id="header__nav-home-item_products-link" className={`header__nav-home-item_products-link ${selected == "products"?'selected':''}`} to="/products/All">{t('headernav.2')}</Link>
            </nav>
            <div className="header__nav-login-item">
               {isUser.loggedIn ? <span className="header__nav-login-item_subheader">{t('headernav.hello')}<b>{isNotUndefined(isUser.name) ? isUser.name : isUser.username}</b></span> : <nav className="header__nav-login-item_subheader">
                    <Link className={`header__nav-login-item_subheader_login-link ${selected == "login"?'selected':''}`} to="/login">{t('headernav.3')}</Link>
                    <Link className={`header__nav-login-item_subheader_register-link ${selected == "register"?'selected':''}`} to="/register">{t('headernav.4')}</Link>
                </nav>}
                {/* Header Cart Component */}
                <CartHeader headerClass={`header__nav-login-item_cart`} />
            </div>
        </nav>
    </header>
    )
}