import React from 'react';
import './EmptyCart.scss';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const EmptyCart = ({closeDialog, isDesktop}) =>{
    const { t } = useTranslation();
    return (
        <main className="main_cart_container-empty">
            <header className="main_cart_container-empty-item_count">
                <h3 className="main_cart_container-empty-item_count-items"><b>{t('cart.mycart')}</b> ( 0 item)</h3>
                {isDesktop ? <Button reqClass="main_cart_container-empty-item_count-close_button" buttonclickhandler={closeDialog}> <Icon source="../../../assets/images/close.png"></Icon></Button> : ""}
            </header>
            <section className="main_cart_container-empty-message">
                <h3>{t('cart.noitems')}</h3>
                <p>{t('cart.emptycartmessage')}</p>
            </section>
            <Link className="main_cart_container-empty-fixed_footer" to="/">
                <Button reqClass="main_cart_container-empty-fixed_footer-button" buttonclickhandler={closeDialog}>
                    {t('cart.startshopping')}
                </Button>
            </Link>
        </main>
    )
};
export default EmptyCart;