import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import './CardProduct.scss';
import {useTranslation} from 'react-i18next';
import { GlobalContext } from '../../../Context/globalContext';
const CardProduct = ({details}) =>{
    const {dispatch} = React.useContext(GlobalContext);
    const {t} = useTranslation();
    const addToCart = () =>{        
        dispatch({
            type:'ADD_ITEM',
            payload:{...details, quantity:1, totalPrice:details.price}
        });
    }
    return (
        <>
        <div className="product" tabIndex="0" role="card">
            <h3 className="product_title">{details.name}</h3>
            <div className="product_card-image" tabIndex="0">
                <Icon  source={details.imageURL}
                alt={details.name} 
                reqclass={'imagefitproduct'}/> 
            </div>
            <p className="product_description">{details.description}</p>
            <section className="product_pricing_buybutton">
                {details.addedtocart && <p>Added to Cart</p>}
                {!details.addedtocart && <Button type="primary" buttonclickhandler={addToCart}>{t('products.button')} @ Rs.{details.price}</Button>}
            </section>
            <section className="product_desktop_pricing">
                <span className="product_desktop_pricing_price">{t('products.mrp')} Rs.{details.price}</span>
                <div className="product_desktop_pricing_buybutton">
                {details.addedtocart && <p>Added to Cart</p>}
                {!details.addedtocart && <Button type="primary" buttonclickhandler={addToCart}>{t('products.button')}</Button>}
                </div>
            </section>
        </div>
        </>
    )
}
export default CardProduct;