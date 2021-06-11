import React,{useState, useEffect, useContext} from 'react';
import './Products.scss';
import Scrolltop from '../../molecules/ScrollTop/Scrolltop';
import Dropdown from '../../molecules/Productdropdown/Dropdown';
import CardProduct from '../../molecules/Card-Product/CardProduct';
import Categories from '../../Organisms/ProductCategories/Categories';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { scrollTop } from '../../../utils/scrollutils';
import { updateTitle, remSpaces } from '../../../utils/utils';
import { GlobalContext } from '../../../Context/globalContext';
import { useMediaQuery } from '../../../customHooks/useMediaQuery';
const Products = (props) =>{
    const { globalState } = useContext(GlobalContext);    
    const { categories, selectedProducts, totalProductsList } = globalState;
    const [displayProductList, setDisplayProductList] = useState(totalProductsList);
    const [selectedCategory, setSelectedCategory] = useState("");
    const isMobile = useMediaQuery('(max-width:480px)');
    const location  = useLocation();
    const {t} = useTranslation();
    //To observe url updation as per category selection/de-selection
    useEffect(()=>{
        let filterval = props.location?.selected?.id ? props.location.selected.id : "All";
        handleCategoryFilter(filterval);
    },[location]);
  
    //To update title
    updateTitle(t('headernav.2'));

    //For checking items added to card  
    (!selectedProducts.length) ? totalProductsList.forEach(product => product.addedtocart = false) :
    selectedProducts.forEach((selectedprod, indexselected) => totalProductsList.forEach(product =>{
        if(indexselected == 0)product.addedtocart = false;
        if(selectedprod.id == product.id)product.addedtocart = true; 
    }));

    //To handle filtration and active/inative of category as per selection/de-selection
    const handleCategoryFilter = (selected) =>{
        let temp = [];
        let active = "";
        if(selected != "All" && selectedCategory != selected){
            temp =  totalProductsList.filter(prod => prod.category === selected);  
            active = selected;
        }
        else temp =  totalProductsList;
        setSelectedCategory(active);
        setDisplayProductList(temp);           
        scrollTop();
    };
    //To handle category selec/de-selec and update url as per.
    const updateProductsRoute = (id, name) =>{    
        props.history.push({pathname: `/products/${ selectedCategory !== id ? remSpaces(name): "All"}`
        ,selected: {id}});
    };
    return (
    <div className="products">
        {!isMobile ?
        (<Categories categories={categories}
            selectedCategory={selectedCategory}
            itemClickHandler={updateProductsRoute}
            />) : 
        (<Dropdown  headerTitle="products.dropdown.title" 
            list={categories} 
            displayProp="name" 
            selectedCategory={selectedCategory  } 
            itemClickHandler={updateProductsRoute} 
            />)
        }
        <section id="products_list" className="products_list">
            {displayProductList.length > 0 && displayProductList.map(product =>{
            return <CardProduct key={product.id} details={product}/>
        })}
        </section>
    </div>
    )}
export default Products;