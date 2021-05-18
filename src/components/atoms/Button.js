import React from 'react';
const Button =(props)=>{
    let buttonstyle = {"height":"6vh", "padding":"8px", "color":"white", "border-style":"none"};
    buttonstyle = props.type === "primary" ? {...buttonstyle , "background-color":"red"} : {...buttonstyle, "background-color":"blue"}
    return <button type="button" style={buttonstyle}>{props.name}</button>
}
export default Button;