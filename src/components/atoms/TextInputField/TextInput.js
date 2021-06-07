import React from 'react';
import './TextInput.scss';
import { useTranslation } from 'react-i18next';
const TextInput = ({id="inputField", type="text", name, reqClass="" ,inputchangehandler, value, autocomplete="true", autofocus=false, maxlength, minlength, pattern, placeholder, readonly="false", required="true", error}) =>{
        const {t} = useTranslation();    
        return (
        <>  
                <input
                id={id}
                name={name} 
                type={type}
                value={value}
                className={`floating__input ${reqClass}`}
                onChange={inputchangehandler} 
                placeholder={t(placeholder)} 
                required={required}
                autoComplete={autocomplete}
                autoFocus={autofocus}
                maxLength={maxlength}
                minLength={minlength}
        />
                <label for={id} 
                className="floating__label" data-content={t(placeholder)} />
                {(error != undefined && error != "") &&<span>{error}</span>}

        </>
      );
};
export default TextInput;
