import React, { useContext, useEffect, useState } from 'react';
import './FormTemplates.scss';
import Button from '../../atoms/Button/Button';
import TextInput from '../../atoms/TextInputField/TextInput';
import { useTranslation } from 'react-i18next';
import { updateTitle } from '../../../utils/utils';
import { GlobalContext } from '../../../Context/globalContext';
import { Link, useHistory, useLocation } from 'react-router-dom';
const FormTemplate = ({inputListUsed, title, description, tabTitle}) =>{
    const {t} = useTranslation();
    const history = useHistory();
    const location = useLocation();
    const [inputList, setInputList] = useState(inputListUsed);
    const [inputObject, setInputObject] = useState({});
    const { dispatch } = useContext(GlobalContext);
    //To set initial input values
    useEffect(()=>{
        let temp = {};
        inputList.forEach(ele => temp[ele.name] = "");        
        setInputObject(temp);
    },[]);

    //Function to update title
    updateTitle(t(tabTitle));

    //To handle success submission of form
    const successSubmit = () =>{
        let payload = inputObject['firstname'] ? 
        {username:inputObject['mail'], name:inputObject['firstname']+inputObject['lastname']} 
        :{username:inputObject['mail']};
        dispatch({
            type:'SIGNED_UP',
            payload:{loggedIn:true, ...payload}
        });
        history.push(location.redirectToSuccess ? '/success' : '/');
    };

    //To handle onsubmit of form.
    const submitfinal = (e) =>{
        let temp = inputList;
        let submit = true;
        temp.forEach(ele => {
            if(ele?.match?.match == true)if(inputObject[ele.match.matchwith] !== inputObject[ele.name]){
                ele['error'] = "providematching";
                submit = false;
            }
        })  
        e.preventDefault();
        submit ? successSubmit() : setInputList(temp);
    };
    return (
        <div className="main-section">
            <section className="main-section_description">
                <h2>{t(title)}</h2>
                <p className="desc-text">{t(description)}</p>  
            </section>
            <section className="main-section_form">
            <form onSubmit={submitfinal}>
                {inputList && inputList.map(inputitem =>{
                    return (
                        <TextInput key={inputitem.id} inputchangehandler={(e) => setInputObject({...inputObject, [e.target.name]:e.target.value})}
                        name={inputitem.name}
                        id={inputitem.id}
                        placeholder={inputitem.placeholder}
                        value={inputObject[inputList.name]}
                        required={inputitem.required}
                        autofocus={inputitem.autofocus}
                        type={inputitem.type}
                        minlength={inputitem.minlength}
                        maxlength={inputitem.maxlength}
                        error={inputitem.error}
                        />);
                })}
                <Button reqClass="login-button" buttontype="submit" buttonclickhandler={submitfinal}>{t(title)}</Button>
                { location.pathname == '/register' ?<><b><Link className="main-section_form-message" to={{pathname:'/login' , redirectToSuccess:location.redirectToSuccess}}>{t('login.title')}</Link></b> {t('login.memberalready')}</> 
                : <>{t('register.newhere')}<b><Link className="main-section_form-message" to={{pathname:'/register' , redirectToSuccess:location.redirectToSuccess}} >{t('register.title')}</Link></b></>}
            </form> 
            </section>
        </div>
      );
};
export default FormTemplate;