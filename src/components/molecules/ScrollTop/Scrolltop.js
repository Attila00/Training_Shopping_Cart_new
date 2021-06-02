import React from 'react';
import './Scrolltop.scss';
import {scrollTop, compareScrollHeight} from '../../../utils/scrollutils';
import Button from '../../atoms/Button/Button';
const Scrolltop = ({showOnHeight=50}) =>{
    window.onscroll = scroll = () => document.getElementById('scroll-button').style.display = compareScrollHeight(showOnHeight) ? "block": "none";
    return <Button id="scroll-button" reqClass="scroll-button" buttonclickhandler={scrollTop}>Top</Button>
};
export default Scrolltop;