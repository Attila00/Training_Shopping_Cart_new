import React from 'react';
import './Counter.scss';
import propTypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import { GlobalContext } from '../../../Context/globalContext';
export const Counter =({counterValue=1, minVal=1, maxVal, id, totalAmount})=>{
    const {dispatch} = React.useContext(GlobalContext);
    let disableInc = false;
    let disableDec = false;
    const handleCounterChangeInc = (e) =>{
            if(counterValue != undefined && counterValue < maxVal){
                if(disableDec)disableDec = false;
                dispatch({
                    type:'ADD_QUANTITY',
                    payload:{id}
                });
            }
            else if(counterValue == maxVal)setDisable(true, disableDec);
    };
    const handleCounterChangeDec = (e) =>{      
            if(counterValue != undefined && counterValue > minVal+1){
                if(disableInc)disableInc = false;
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
                setDisable(disableInc, true)
            };
    };
    const setDisable = (inc, dec) =>{
        disableInc = (inc != undefined && inc) ? true : false;
        disableDec = (dec != undefined && dec) ? true : false;
    };
    return <div className="main_counter">
        <Button name="decrement" reqClass={`counter-button`} 
        disabled={disableDec} buttonclickhandler={handleCounterChangeDec}>-</Button>
        <p>{counterValue}</p>
        <Button name="increment" reqClass={`counter-button`} 
        disabled={disableInc} buttonclickhandler={handleCounterChangeInc}>+</Button>
    </div>
};
Counter.propTypes = {
    counterValue: propTypes.number.isRequired,
    maxVal: propTypes.number.isRequired
}