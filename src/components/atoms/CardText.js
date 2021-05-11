import React from 'react';
import Button from '../atoms/Button';
import './CardText.scss';
const CardText = ({content}) =>{
    return (
    <div className="card-text-main">
        <h3>{content.title}</h3>
        <h6>{content.description}</h6>
        <div><Button name={content.buttonName} type="primary"></Button></div>
    </div>
    );
}
export default CardText;