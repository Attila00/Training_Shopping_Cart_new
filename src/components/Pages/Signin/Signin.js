import React from 'react';
import FormTemplate from '../../Templates/FormTemplates/FormTemplate';
const Signin = ({}) =>{
    let inputList=[{id:"input__mail", name:"mail", placeholder:"register.inputs.3", required:true, autofocus:true, type:"email", minlength:5},
{id:"input__password", name:"password", placeholder:"register.inputs.4", required:true, autofocus:false, type:"password", minlength:8, maxlength:10}];
    return (            
            <FormTemplate inputListUsed={inputList} 
            title="login.title" 
            description="login.desc"
            tabTitle = "headernav.3"/>
      );
};
export default Signin;