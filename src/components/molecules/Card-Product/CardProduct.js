import React from 'react';
import './CardProduct.scss';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import { useTranslation } from 'react-i18next';
import { GlobalContext } from '../../../Context/globalContext';
import { useMediaQuery } from '../../../customHooks/useMediaQuery';
const CardProduct = ({details}) =>{
    const {dispatch} = React.useContext(GlobalContext);
    let isDesktop = useMediaQuery('(min-width:769px)');
    const {t} = useTranslation();
    const addToCart = () =>{        
        dispatch({
            type:'ADD_ITEM',
            payload:{...details, quantity:1, totalPrice:details.price}
        });
    }
    return (
        <>
        <div className="product" role="card">
            <h3 className="product_title">{details.name}</h3>
            <Icon  source={details.imageURL}
                alt={details.name} 
                pictureReqClass={'product_card-image'}
                reqclass={'imagefitproduct'}/> 
            <p className="product_description">{details.description}</p>
            {isDesktop ? <p className="product_price">{t('products.mrp')} Rs.{details.price}</p> : <></>}
                {details.addedtocart && <span className="product_added-message">{t('products.addedtocart')}</span>}
                {!details.addedtocart && <Button type="primary" reqClass={`product_buybutton`} buttonclickhandler={addToCart}>{t('products.button')} {isDesktop ? "" :`@ Rs.${details.price}`}</Button>}
        </div>
        </>
    )
}
export default CardProduct;