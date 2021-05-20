import React from 'react';
import './Button.scss';
const Button =({type, children, id, name, buttonclickhandler, reqClass ,buttontype="button"})=>{
    return <button type={buttontype} id={id} name={name} className={`primary-button ${reqClass}`} onClick={buttonclickhandler}>{children}</button>
}
export default Button;