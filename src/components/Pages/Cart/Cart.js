import React, { useEffect } from 'react';
import './Cart.scss';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import { Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CartItem } from '../../Organisms/Cart-Item/CartItem';
import { GlobalContext } from '../../../Context/globalContext';
import { useMediaQuery } from '../../../customHooks/useMediaQuery';
import EmptyCart from './EmptyCart';
export const Cart = (props) => {
    const { t } = useTranslation();
    const { globalState, dispatch } = React.useContext(GlobalContext);
    const { selectedProducts, isUser, isOpen } = globalState;
    const history = useHistory();
    let totalAmountAlltypes = 0;
    let isDesktop = useMediaQuery('(min-width:769px)');

    //To calculate total cart value
    selectedProducts.forEach(item => totalAmountAlltypes += parseFloat(item.totalPrice));

    //Handles dialog closure action dispatch
    const closeDialog = () =>{
        dispatch({
            type:'HANDLE_MODAL',
            payload:{isDialogOpen:false}
        })
    };
    const proceedToCheckout = () =>{
        closeDialog();
        history.push({pathname: isUser.loggedIn ? "/success" : "/login" , redirectToSuccess:true});
    }
    if(selectedProducts.length > 0)return (
        <main id="mortal" className="main_cart_container">
            <header className="main_cart_container-item_count">
                <h3 className="main_cart_container-item_count-items"><b>{t('cart.mycart')}</b> ( {selectedProducts.length} item)</h3>
                { isDesktop ? <Button reqClass="main_cart_container-item_count-close" buttonclickhandler={closeDialog}> <Icon source="../../../assets/images/close.png" reqclass={`closeiconfit`}></Icon></Button> : ""}
            </header>
            <div className="main_cart_container-items">
            {selectedProducts.map((item, index )=> {
                return  <CartItem  key={item.id} id={index} imgSource={item.imageURL}
                            name={item.name} 
                            price={item.price} 
                            stock={item.stock}
                            totalPrice={item.totalPrice}
                            quantity={item.quantity}/>}
                )}  
            
            <section className="main_cart_container-banner">
                <Icon source="../../../assets/images/lowest-price.png" reqclass={`footerimagefitcart`}/> 
                <span> {t('cart.cheapermsg')} </span>
            </section>
            </div>
            <footer className="main_cart_container-fixed_footer">
                <p>{t('cart.promomessage')}</p> 
                {/* <Link className="main_cart_container-empty-fixed_footer" to=''> */}
                    <Button reqClass="main_cart_container-fixed_footer-button" buttonclickhandler={proceedToCheckout}>
                        <p>{t('cart.proceed')}</p>
                        <p>{`Rs. ${totalAmountAlltypes} >`}</p>
                    </Button>
                {/* </Link> */}
            </footer>
        </main>
    )
    else return <EmptyCart closeDialog={closeDialog} isDesktop={isDesktop}/>
};