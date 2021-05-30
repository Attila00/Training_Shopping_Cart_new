import React from 'react';
import './Products.scss';
import CardProduct from '../../molecules/Card-Product/CardProduct';
import Dropdown from '../../molecules/Productdropdown/Dropdown';
import Button from '../../atoms/Button/Button';
import { useTranslation } from 'react-i18next';
import { updateTitle } from '../../../utils/utils';
import { scrollTop } from '../../../utils/scrollutils';
import Scrolltop from '../../molecules/ScrollTop/Scrolltop';
import { GlobalContext } from '../../../Context/globalContext';
const Products = (props) =>{
    const [totalProductsList] = React.useState(require('../../../../server/products/index.get.json'));
    const [displayProductList, setDisplayProductList] = React.useState(totalProductsList);
    const [selectedCategory, setSelectedCategory] = React.useState("");
    const { selectedProducts } = React.useContext(GlobalContext);
    const {t} = useTranslation();
    React.useEffect(()=>{
    let filterval = props.location?.selected?.id ? props.location.selected.id : "All";
    handleCategoryFilter(filterval);
    },[props]);
    updateTitle(t('headernav.2'));
    let categories = require('../../../../server/categories/index.get.json');
    categories.sort((a, b) => a["order"] - b["order"]);
    //For checking items added to card
    selectedProducts.forEach((selectedprod, indexselected) => totalProductsList.forEach(product =>{
        if(indexselected == 0)product.addedtocart = false;
        if(selectedprod.id == product.id)product.addedtocart = true; 
    }));
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
    const updateProductsRoute = (e) =>{        
        if(selectedCategory !== e.target.id) props.history.push({pathname: `/products/${e.target.innerText.split(" ").join("")}`,selected: {id:e.target.id}});
        else props.history.push({pathname: "/products/All",selected: {id:"All"}});
    };
    return (
    <main className="products">
        <Scrolltop showOnHeight={50}/>
        <aside className="products_categories">
            {categories.map(category =>{
                if(category.order > 0) return <section tabIndex="0"
                className={`clickable ${selectedCategory == category.id ? "selected" : ""}`} 
                id={category.id} onClick={updateProductsRoute}>
                    <h3 id={category.id} className="margin-tb-zero">{category.name}</h3>
                    {selectedCategory == category.id && <h3 id={category.id} className="margin-tb-zero">X</h3>}
                </section>
            })}
        </aside>
        <section className="products_categories_dropdown">
            <Dropdown headerTitle="products.dropdown.title" 
            list={categories} 
            displayProp="name" 
            selectedCategory={selectedCategory} 
            itemClickHandler={updateProductsRoute} 
            selected/>
        </section>
        <section id="products_list" className="products_list" tabIndex="0">
            {displayProductList.length > 0 && displayProductList.map(product =>{
            return <CardProduct details={product}/>
        })}
        </section>
    </main>
    )}
export default Products;