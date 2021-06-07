import React from 'react';
import ReactDom  from 'react-dom';
import { GlobalContext } from '../../../Context/globalContext';
import './Dialog.scss';
const Dialog =({children}) =>{
    const { globalState:{isOpen} } = React.useContext(GlobalContext);
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