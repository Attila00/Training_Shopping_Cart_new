import React from 'react';
import './Button.scss';
const Button =({children, id, name, buttonclickhandler, reqClass ,buttontype="button", disabled=false})=>{
    return <button type={buttontype} id={id} name={name} className={`${reqClass} primary-button`} onClick={buttonclickhandler} disabled={disabled}>{children}</button>
}
export default Button;