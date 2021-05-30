import React from 'react';
import './Footer.scss';
import Icon from '../../atoms/Icon/Icon';
import '../../../assets/images/hinditoenglish.svg';
import {useTranslation} from 'react-i18next';
const Footer =()=>{
    const {t, i18n} = useTranslation();
return (
    <footer className="footer-main">
        <section className="footer-main_subcontainer">
            <p>{t('footer.message')}</p>
            <Icon source="../../../assets/images/hinditoenglish.svg" reqclass={`imagefitlogin clickable`} onClickHandler={() => i18n.changeLanguage( i18n.language == 'en' ? 'hin' : 'en')}/>
        </section>
    </footer>
)
};
export default Footer;