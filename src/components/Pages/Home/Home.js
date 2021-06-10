import React from 'react';
import Card from "../../molecules/Card-Home/Card";
import Carousel from '../../Organisms/HomeCarousel/Carousel';
import {useTranslation} from 'react-i18next';
import { updateTitle } from '../../../utils/utils';
import { GlobalContext } from '../../../Context/globalContext';
const Home =(props)=>{
    const {t} = useTranslation();
    const {globalState:{categories}} = React.useContext(GlobalContext);

    //To update title
    updateTitle(t('headernav.1'));
    return (
        <main>
            <Carousel />
            {categories && categories.map((category, index) => {
                if(category.order && category.order > 0) return <Card key={category.id} id={category.name} 
                name={category.name.split(" ").join("")} 
                imageLeft={(index+1) % 2 == 0 ? true : false} 
                categoryImage={category.imageUrl} 
                content={{"title":category.name, "description":category.description, "buttonName":`${t('home.button')} ${category.key}`, 
                id: category.id, "name":category.name.split(" ").join("")}}
                buttonclickhandler={(e)=> props.history.push({pathname : `/products/${e.target.name}` , selected:{id : e.target.id} })}/>
            })} 
        </main>
    )
}
export default Home;