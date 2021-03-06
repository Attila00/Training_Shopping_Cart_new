import React, { useEffect, useState, useContext } from 'react';
import Icon from '../../atoms/Icon/Icon';
import Dialog from '../../Pages/Modal/Dialog';
import { Cart } from '../../Pages/Cart/Cart';
import { GlobalContext } from '../../../Context/globalContext';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { useMediaQuery } from '../../../customHooks/useMediaQuery'
import Button from '../../atoms/Button/Button';
export const CartHeader = (props) =>{
    const deviceDesktop = useMediaQuery('(min-width: 769px)');
    const [atCart, setAtCart] = useState(false);
    const { t } = useTranslation();
    const history = useHistory();
    const location = useLocation();
    const { globalState, dispatch } = useContext(GlobalContext);
    const { selectedProducts, isOpen} = globalState;

    //Observer to handle cart page/modal conversion simulnateously as per gradual screen resize
    useEffect(() => {
        if(location.pathname.includes('cart') || isOpen){
            setAtCart(true);
            navigateToCart();
        }
    },[deviceDesktop]);

    //Function to handle cart page/modal opening as per device width
    const navigateToCart = () =>{
        if(!deviceDesktop){
            dispatch({
                type:'HANDLE_MODAL',
                payload:{isDialogOpen:false}
            })
            history.push({pathname: "/mycart",selected: {}});
        }
        else{
            dispatch({
            type:'HANDLE_MODAL',
            payload:{isDialogOpen:true}
            })
            atCart && history.push({pathname: "/products/All",selected: {id:"All"}});
        }
    };
    
    return (
    <>
    <Button reqClass={`${props.headerClass} `} buttonclickhandler={navigateToCart} >
        <Icon source="../../../assets/images/cart.svg" alt="cart image" reqclass={`cart-image`}/>
        <span className="header__nav-login-item_cart-item_count">{selectedProducts.length} {selectedProducts.length === 1 ? t('cart.item') : t('cart.items')}</span>
    </Button>

    { isOpen ? <Dialog isOpen={isOpen}><Cart/></Dialog> : null}
    </>
    )
};