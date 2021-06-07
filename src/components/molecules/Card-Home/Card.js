import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import CardText from '../../atoms/CardText/CardText';
import './Card.scss';
const Card = ({categoryImage, content, imageLeft="", buttonclickhandler, id, name}) =>{
    return (
    <>
    {imageLeft? 
        <section id={id} tabIndex={0} name={`${name} card`} className="main__card_subcontainer">
            <Icon source={categoryImage} tabIndex={0} alt={`${name} image`} reqclass={`imagefithome`}/> 
            <CardText content={content} buttonclickhandler={buttonclickhandler} reqClass="card-text-section"/>
        </section>: 
        <section tabIndex={0} name={`${name} card`} className="main__card_subcontainer"> 
            <CardText content={content} buttonclickhandler={buttonclickhandler} reqClass="card-text-section"/>
            <Icon source={categoryImage} tabIndex={0} alt={`${name} image`} reqclass={`imagefithome`}/>
        </section> 
    }
    </>
    )
}
export default Card;