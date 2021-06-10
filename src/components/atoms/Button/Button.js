import React from 'react';
import './Button.scss';
const Button =({children, id, name, buttonclickhandler, reqClass ,buttontype, disabled, role})=>{
    return <button type={buttontype} id={id} name={name} className={`${reqClass} ${disabled ? 'disabled' : 'primary'}-button`} onClick={buttonclickhandler} disabled={disabled} role={role}>{children}</button>
}
export default Button;