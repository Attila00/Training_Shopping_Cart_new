import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import CardText from '../../atoms/CardText/CardText';
import './Card.scss';
const Card = ({categoryImage, content, imageLeft="", buttonclickhandler, id, name}) =>{
    return (
    <>
    {imageLeft? 
        <section id={id} className="main__card_subcontainer">
            <Icon source={categoryImage} reqclass={`imagefithome`}/> 
            <CardText content={content} buttonclickhandler={buttonclickhandler} reqClass="card-text-section"/>
        </section>: 
        <section className="main__card_subcontainer"> 
            <CardText content={content} buttonclickhandler={buttonclickhandler} reqClass="card-text-section"/>
            <Icon source={categoryImage} alt={""} reqclass={`imagefithome`}/>
        </section> 
    }
    </>
    )
}
export default Card;