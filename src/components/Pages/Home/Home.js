import React, { useContext, Suspense, lazy }from 'react';
import Card from "../../molecules/Card-Home/Card";
const  Carousel  = lazy(() => import('../../Organisms/HomeCarousel/Carousel'));
import {useTranslation} from 'react-i18next';
import { updateTitle } from '../../../utils/utils';
import { GlobalContext } from '../../../Context/globalContext';
const Home =(props)=>{
    // For using locale in the application. t is the core translation function, which through our key value passed
    // as param fetches the related value from our languages objects file. 'i18n' holds many properties used 
    // for getting current state of langugae in the application and updating it.
    const { t } = useTranslation();
    const {globalState:{categories}} = useContext(GlobalContext);

    //To update title
    updateTitle(t('headernav.1'));
    return (
        <>
            <Suspense fallback={<div> Offers are on the way...</div>}>
                <Carousel />
            </Suspense>
            {categories && categories.map((category, index) => {
                if(category.order && category.order > 0) return <Card key={category.id} id={category.name} 
                name={category.name.split(" ").join("")} 
                imageLeft={(index+1) % 2 == 0 ? true : false} 
                categoryImage={category.imageUrl} 
                content={{"title":category.name, "description":category.description, "buttonName":`${t('home.button')} ${category.key}`, 
                id: category.id, "name":category.name.split(" ").join("")}}
                buttonclickhandler={(e)=> props.history.push({pathname : `/products/${e.target.name}` , selected:{id : e.target.id} })}/>
            })} 
        </>
    )
}
export default Home;