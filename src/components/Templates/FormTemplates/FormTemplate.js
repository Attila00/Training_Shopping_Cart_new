import React from 'react';
import Button from '../../atoms/Button/Button';
import TextInput from '../../atoms/TextInputField/TextInput';
import { useTranslation } from 'react-i18next';
import { updateTitle } from '../../../utils/utils'
import './FormTemplates.scss';
const FormTemplate = ({inputList, title, description, tabTitle}) =>{
    const {t, i18n} = useTranslation();
    const [inputObject, setInputObject] = React.useState({});
    React.useEffect(()=>{
        let temp = {};
        inputList.forEach(ele => temp[ele.name] = "");        
        setInputObject(temp);
    },[]);
    //Function to update title
    updateTitle(t(tabTitle));
    const submitfinal = (e) =>{
        let matchedinput = inputList.filter(ele => ele?.match?.match == true)[0];
        if(inputObject[matchedinput.match.matchwith] !== inputObject[matchedinput.name]) alert("Please provide matching values")
        e.preventDefault();
    };
    return (
            <main className="main-section">
                <section className="main-section_description">
                    <h2>{t(title)}</h2>
                    <p className="desc-text">{t(description)}</p>  
                </section>
                <section className="main-section_form">
                <form  onSubmit={submitfinal}>
                        {inputList && inputList.map(inputitem =>{
                            return (
                                <TextInput inputchangehandler={(e) => setInputObject({...inputObject, [e.target.name]:e.target.value})}
                                name={inputitem.name}
                                id={inputitem.id}
                                placeholder={inputitem.placeholder}
                                value={inputObject[inputList.name]}
                                required={inputitem.required}
                                autofocus={inputitem.autofocus}
                                type={inputitem.type}
                                minlength={inputitem.minlength}
                                maxlength={inputitem.maxlength}
                                error={""}/>
                        );
                        })}
                        <Button reqClass="login-button" type="primary" buttontype="submit">{t(title)}</Button>
                </form> 
                </section>
            </main>
      );
};
export default FormTemplate;