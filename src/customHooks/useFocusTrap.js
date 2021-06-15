import React, { useEffect, useState } from 'react';
import { focusElement, getElement, getFocusables } from '../utils/utils';
const useFocusTrap = (ref) =>{
    const dialog = document.getElementById("portal");
    const [ elementRef, setElementRef ] = useState(ref); 
    const focusables = getFocusables();

    const keyPresshandler = e =>{
        const firstElement = getElement(dialog, focusables, 0);
        const lastElement = getElement(dialog, focusables, '-1');

        if(e.key !== 'Tab') return;
        if(!e.shiftkey && document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
        }
        else if(e.shiftkey && document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
        }
    };

    useEffect(() => {
        focusElement(dialog, focusables, 0);
        elementRef?.current?.addEventListener('keydown', keyPresshandler);
        return () => elementRef?.current?.removeEventListener('keydown', keyPresshandler);
    },[elementRef]);
    return setElementRef;
};
export default useFocusTrap;