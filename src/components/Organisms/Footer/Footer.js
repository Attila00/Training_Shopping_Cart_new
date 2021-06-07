import React from 'react';
import './Footer.scss';
import Icon from '../../atoms/Icon/Icon';
import '../../../assets/images/hinditoenglish.svg';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import Button from '../../atoms/Button/Button';
const Footer =()=>{
    const {t, i18n} = useTranslation();
    const location = useLocation();
    if(location.pathname.includes('cart')) return null;
return (
    <footer className="footer-main">
        <div className="footer-main_subcontainer">
            <p>{t('footer.message')}</p>
            <Button reqClass={`footer-main_subcontainer-image_button`} buttonclickhandler={() => i18n.changeLanguage( i18n.language == 'en' ? 'hin' : 'en')}><Icon source="../../../assets/images/hinditoenglish.svg" alt={`Click to translate language between Hindi and English`} reqclass={`imagefitlogin clickable`}/></Button>
        </div>
    </footer>
)
};
export default Footer;