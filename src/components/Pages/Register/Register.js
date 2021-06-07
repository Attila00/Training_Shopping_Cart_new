import React from 'react';
import FormTemplate from '../../Templates/FormTemplates/FormTemplate';
const Register = ({}) =>{
    let inputList=[{id:"input__firstname", name:"firstname", placeholder:"register.inputs.1", required:true, autofocus:true, error:""},
{id:"input__lastname", name:"lastname", placeholder:"register.inputs.2", required:true, autofocus:false, error:""},
{id:"input__mail", name:"mail", placeholder:"register.inputs.3", required:true, autofocus:false, type:"email", error:""},
{id:"input__password", name:"password", placeholder:"register.inputs.4", required:true, autofocus:false, type:"password", minlength:1, maxlength:10, error:""},
{id:"input__conpass", name:"conpass", placeholder:"register.inputs.5", required:true, autofocus:false, type:"password", match:{match:true, matchwith:"password"}, error:""}];

    return (            
            <FormTemplate inputListUsed={inputList} 
            title="register.title" 
            description="register.desc"
            tabTitle = "headernav.4"/>
      );
};
export default Register;