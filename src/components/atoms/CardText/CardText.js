import React from 'react';
import Button from '../Button/Button';
import './CardText.scss';
const CardText = ({content, reqClass, buttonclickhandler}) =>{
    return (
    <section className={`card-text-main ${reqClass}`}>
        <h3>{content.title}</h3>
        <p>{content.description}</p>
        <Button type="primary" 
        buttonclickhandler={buttonclickhandler} 
        id={content.id} 
        name={content.name}>
        {content.buttonName}</Button>
    </section>
    );
}
export default CardText;