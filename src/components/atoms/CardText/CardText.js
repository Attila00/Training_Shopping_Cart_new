import React from 'react';
import Button from '../Button/Button';
import './CardText.scss';
const CardText = ({content, reqClass, buttonclickhandler}) =>{
    return (
    <article className={`card-text-main ${reqClass}`}>
        <h3>{content.title}</h3>
        <p className="desc-text">{content.description}</p>
        <Button type="primary" 
            buttonclickhandler={buttonclickhandler} 
            id={content.id} 
            name={content.name}
            reqClass={`home-card-button`}>
            {content.buttonName}</Button>
    </article>
    );
}
export default CardText;