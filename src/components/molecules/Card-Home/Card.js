import React from 'react';
import './Card.scss';
import Icon from '../../atoms/Icon/Icon';
import CardText from '../../atoms/CardText/CardText';
const Card = ({categoryImage, content, imageLeft="", buttonclickhandler, id, name}) =>{
    return (
    <>
    {imageLeft? 
        <section id={id}  name={`${name} card`} className="main__card_subcontainer">
            <Icon source={categoryImage}  alt={`${name} image`} reqclass={`imagefithome`} pictureReqClass={`picturefithome`}/> 
            <CardText content={content} buttonclickhandler={buttonclickhandler} reqClass="card-text-section"/>
        </section>: 
        <section  name={`${name} card`} className="main__card_subcontainer"> 
            <CardText content={content} buttonclickhandler={buttonclickhandler} reqClass="card-text-section"/>
            <Icon source={categoryImage}  alt={`Image of ${name}`} reqclass={`imagefithome`} pictureReqClass={`picturefithome`}/>
        </section> 
    }
    </>
    )
}
export default Card;