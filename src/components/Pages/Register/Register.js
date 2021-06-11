import React from 'react';
import inputList from '../../../Meta/registerFormMeta.json';
import FormTemplate from '../../Templates/FormTemplates/FormTemplate';
const Register = ({}) =>{
    return (            
            <FormTemplate inputListUsed={inputList} 
            title="register.title" 
            description="register.desc"
            tabTitle = "headernav.4"/>
      );
};
export default Register;