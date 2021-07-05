import React, { useState, useEffect } from 'react';
import './Counter.scss';
import propTypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import { GlobalContext } from '../../../Context/globalContext';
export const Counter =({counterValue=1, minVal=1, maxVal, id})=>{
    const {dispatch} = React.useContext(GlobalContext);
    const [ disableInc, setDisableInc ] = useState(false);
    // const [ disableDec, setDisableDec ] = useState(false);
    useEffect(() => {
        setDisableInc(counterValue == maxVal ? true : false);
        return () => setDisableInc(false);
    }, [counterValue]);

    const handleCounterChangeInc = (e) =>{
            if(counterValue != undefined && counterValue < maxVal){
                // if(disableDec)setDisableDec(false);
                dispatch({
                    type:'ADD_QUANTITY',
                    payload:{id}
                });
            }   
    };
    const handleCounterChangeDec = (e) =>{      
            if(counterValue != undefined && counterValue > minVal+1){
                dispatch({
                    type:'REMOVE_QUANTITY',
                    payload:{id}
                });
            }
            else if(counterValue == minVal+1){
                dispatch({
                    type:'REMOVE_ITEM',
                    payload:{id}
                });
                // setDisableDec(true)
            };
    };
    return <div className="main_counter">
        <Button name="decrement" reqClass={`counter-button`} 
                              buttonclickhandler={handleCounterChangeDec}>-</Button>
        <p>{counterValue}</p>
        <Button name="increment" reqClass={`counter-button`} 
        disabled={disableInc} buttonclickhandler={handleCounterChangeInc}>+</Button>
    </div>
};
Counter.propTypes = {
    counterValue: propTypes.number.isRequired,
    maxVal: propTypes.number.isRequired
}