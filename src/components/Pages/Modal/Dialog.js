import React, { useEffect } from 'react';
import ReactDom  from 'react-dom';
import './Dialog.scss';
const Dialog =({children, isOpen}) =>{
    useEffect(() =>{
       if(isOpen) document.body.style.overflow = "hidden";
       return () => document.body.style.overflow = "unset";
     },[isOpen])

    if(!isOpen) return null;
    return ReactDom.createPortal(
        <>
        <div className="overlay"></div>
        <div className="modal_main">
        {children}
        </div>
        </>
    ,document.getElementById("portal")
    )
};
export default Dialog;