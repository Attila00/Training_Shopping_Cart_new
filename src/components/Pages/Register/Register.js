import React from 'react';
import FormTemplate from '../../Templates/FormTemplates/FormTemplate';
const Register = ({}) =>{
    let inputList=[{id:"input__firstname", name:"firstname", placeholder:"register.inputs.1", required:true, autofocus:true},
{id:"input__lastname", name:"lastname", placeholder:"register.inputs.2", required:true, autofocus:false},
{id:"input__mail", name:"mail", placeholder:"register.inputs.3", required:true, autofocus:false, type:"email"},
{id:"input__password", name:"password", placeholder:"register.inputs.4", required:true, autofocus:false, type:"password", minlength:8, maxlength:10},
{id:"input__conpass", name:"conpass", placeholder:"register.inputs.5", required:true, autofocus:false, type:"password", match:{match:true, matchwith:"password"}}];

    return (            
            <FormTemplate inputList={inputList} 
            title="register.title" 
            description="register.desc"
            tabTitle = "headernav.4"/>
      );
};
export default Register;