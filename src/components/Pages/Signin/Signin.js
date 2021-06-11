import React from 'react';
import inputList from '../../../Meta/loginFormMeta.json';
import FormTemplate from '../../Templates/FormTemplates/FormTemplate';
const Signin = ({}) =>{
    return (            
            <FormTemplate inputListUsed={inputList} 
            title="login.title" 
            description="login.desc"
            tabTitle = "headernav.3"/>
      );
};
export default Signin;