import React from 'react';

function Input({type,label,placeholder,updateName}){
    //console.log(updateName);
    return <>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} 
                onChange={(e) => updateName(e.target.value)}/>
        <br/>
        {/*console.log(updateName)*/}
    </>
}
export default Input;