import React from 'react';
import './ScrollTop.scss';
import Button from '../../atoms/Button/Button';
import {scrollTop, compareScrollHeight} from '../../../utils/scrollutils';
const Scrolltop = ({showOnHeight=50}) =>{
    //Captures scroll event to dynamically display scrolltop button
    window.onscroll = scroll = () => document.getElementById('scroll-button') && (document.getElementById('scroll-button').style.display = compareScrollHeight(showOnHeight) ? "block": "none");
    return <Button id="scroll-button" reqClass="scroll-button" buttonclickhandler={scrollTop}>Top</Button>
};
export default Scrolltop;