import React from 'react';
import Card from "../molecules/Card-Home/Card";
const Section =()=>{
    let categories = require('../../../server/categories/index.get.json');
    categories.sort((a, b) => a["order"] - b["order"]);
    return (
        <section>
            {categories.map((category, index) => {
                if(category.order > 0) return <Card imageLeft={(index+1) % 2 == 0 ? false : true} categoryImage={category.imageUrl} content={{"title":category.name, "description":category.description, "buttonName":`Explore ${category.key}`}}/>
            })} 
        </section>
    )
}
export default Section;