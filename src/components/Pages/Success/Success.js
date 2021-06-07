import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { GlobalContext } from '../../../Context/globalContext';
const Success = () =>{
    const { globalState:{isUser} } = useContext(GlobalContext);
    const { t } = useTranslation();
    let deliveryDate = "";
    useEffect(() =>{ deliveryDate = new Date().getDate()+1 },[]);
    return (
        <div>
            <h2>Congratulations {isUser.name}</h2>
            <p>{t('Your order has been placed successfully, and will be delivered by ')}{deliveryDate}</p>
        </div>
    )
};
export default Success;