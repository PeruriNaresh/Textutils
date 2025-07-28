import React from 'react'

export default function Alert(props){
    const style={transition:"opacity 1s "}
    const capitalize=(word)=>{
        const lower = word.toLowerCase();
        return (lower.charAt(0)).toUpperCase() + lower.slice(1);
    }
    return(
        props.alert && <div style={style} className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.typ)}</strong>  {props.alert.msg}
            </div>
    )
}
Alert.defaultProps = { alert:"this is default alert"}