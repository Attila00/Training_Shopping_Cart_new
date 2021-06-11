import React from 'react';
import './Categories.scss';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
const Categories = ({categories, itemClickHandler, selectedCategory}) =>{
    return(
        <aside className="products_categories">
            <ul className="products_categories_list">
            {categories.map(category =>{
                if(category.order > 0) return <li><Button key={category.id}
                reqClass={`clickable products_categories_list-item-button ${selectedCategory == category.id ? "selected" : ""}`} 
                id={category.id} buttonclickhandler={() => itemClickHandler(category.id, category.name)}>
                    <span className="margin-tb-zero">{category.name}</span>
                    {selectedCategory == category.id && <Icon  source="../../../assets/images/rubbish-bin.png" reqclass={`iconfitcross`} className="margin-tb-zero"/>}
                </Button></li>
            })}
            </ul>
        </aside>
    )
};
export default Categories;