import React from 'react';
import Card from "../../molecules/Card-Home/Card";
import { updateTitle } from '../../../utils/utils';
import {useTranslation} from 'react-i18next';
const Home =(props)=>{
    const {t} = useTranslation();
    updateTitle(t('headernav.1'));
    let categories = require('../../../../server/categories/index.get.json');
    categories.sort((a, b) => a["order"] - b["order"]);
    return (
        <main>
            {categories && categories.map((category, index) => {
                if(category.order && category.order > 0) return <Card id={category.name} 
                name={category.name.split(" ").join("")} 
                imageLeft={(index+1) % 2 == 0 ? true : false} 
                categoryImage={category.imageUrl} 
                content={{"title":category.name, "description":category.description, "buttonName":`Explore ${category.key}`, 
                id: category.id, "name":category.name.split(" ").join("")}}
                buttonclickhandler={(e)=> props.history.push({pathname : `/products/${e.target.name}` , selected:{id : e.target.id} })}/>
            })} 
        </main>
    )
}
export default Home;