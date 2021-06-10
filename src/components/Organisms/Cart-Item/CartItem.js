import React from 'react';
import './CartItem.scss';
import Icon from '../../atoms/Icon/Icon';
import { Counter } from '../../molecules/Counter/Counter';

export const CartItem = ({id, imgSource, name, price, totalPrice, stock, quantity}) =>{
    return( 
    <div id={id} className="main_cart_container-item_section">
        <Icon source={imgSource} reqclass={`imagefitcart`}/>
        <section className="main_cart_container-item_section-details">
            <h3 className="margin-tb-zero">{name}</h3>
            <section className="main_cart_container-item_section-details_section">
                <Counter minVal={0} maxVal={stock} counterValue={quantity} id={id} totalAmount={totalPrice}/> 
                <p className="main_cart_container-item_section-details_section-cost margin-tb-zero">X {price}</p> 
                <p className="main_cart_container-item_section-details_section-total_cost margin-tb-zero">Rs. {totalPrice}</p>
            </section>
        </section>
    </div>
    )};