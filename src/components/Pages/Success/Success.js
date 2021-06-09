import React, { useContext, useEffect } from 'react';
import './Success.scss';
import Icon from '../../atoms/Icon/Icon';
import { useTranslation } from 'react-i18next';
import { GlobalContext } from '../../../Context/globalContext';
const Success = () =>{
    let { globalState } = useContext(GlobalContext);
    const { isUser, selectedProducts } = globalState;
    const { t } = useTranslation();
     let deliveryDate = new Date().getDate()+1 +" "+new Date().toLocaleString('default', { month: 'long' });
    return (
        <main className="success_main">
            <Icon source="../../../assets/images/checked.png"/>
            <h2>{t('success.congratulations')} {isUser.name}</h2>
            <p>{t('success.orderplaced')} <b>{deliveryDate}</b></p>
            {selectedProducts.map(item => {
                return <section className="success_main-item"><p>{item.name.substr(0,20)} - {item.quantity} X Rs. {item.price}</p> <b>Rs. {item.totalPrice}</b></section>
            })}
        </main>
    )
};
export default Success;