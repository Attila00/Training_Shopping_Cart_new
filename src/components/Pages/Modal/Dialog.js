import React, { useContext, useEffect, useRef } from 'react';
import ReactDom  from 'react-dom';
import { GlobalContext } from '../../../Context/globalContext';
import useFocusTrap from '../../../customHooks/useFocusTrap';
import './Dialog.scss';
const Dialog =({children, isOpen}) =>{
    const { dispatch } = useContext(GlobalContext);
    const dialogRef = useRef(null);
    const setElementRef = useFocusTrap(null);
    useEffect(() =>{
        if(isOpen){
            setElementRef(dialogRef);
            document.body.style.overflow = "hidden";
        }
        return () =>{
            setElementRef(null);
            document.body.style.overflow = "unset";
       } 
     },[isOpen])

    if(!isOpen) return null;
    return ReactDom.createPortal(
        <div ref={dialogRef}>
            <div className="overlay" onClick={() => dispatch({type:'HANDLE_MODAL', payload:{isDialogOpen:false}})}></div>
            <div className="modal_main">
            {children}
            </div>
        </div>
    ,document.getElementById("portal")
    )
};
export default Dialog;