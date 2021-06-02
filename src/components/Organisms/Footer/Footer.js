import React from 'react';
import './Footer.scss';
import Icon from '../../atoms/Icon/Icon';
import '../../../assets/images/hinditoenglish.svg';
import {useTranslation} from 'react-i18next';
const Footer =()=>{
    const {t, i18n} = useTranslation();
return (
    <footer tabIndex={0} className="footer-main">
        <section className="footer-main_subcontainer">
            <p tabIndex={0}>{t('footer.message')}</p>
            <Icon tabIndex={0} source="../../../assets/images/hinditoenglish.svg" alt={`Click to translate language between Hindi and English`} reqclass={`imagefitlogin clickable`} onClickHandler={() => i18n.changeLanguage( i18n.language == 'en' ? 'hin' : 'en')}/>
        </section>
    </footer>
)
};
export default Footer;