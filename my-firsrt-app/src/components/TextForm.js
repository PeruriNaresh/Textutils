import React,{useState} from 'react'

export default function TextForm(props){
    const [text,setText]=useState('');
    const convertToUpper =()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success")
    }
    const handleOnChange=(event)=>{
        props.showAlert("ENTERING TEXT","success")
        setText(event.target.value)
    }
    const convertToLower=()=>{
        setText(text.toLowerCase());
        props.showAlert("converted to lowercase","success")
    }
    const clearText =()=>{
        props.showAlert("text is cleared","success")
        setText('');
    }
    return(
        < >
            <div className="container col-12" style={props.style}>
                <h1>{props.heading}</h1>
                <textarea className="form-control my-2" value={text} onChange={handleOnChange} id="mybox" placeholder='rasko ra samba' rows="5"></textarea>
                <button className="btn btn-primary" onClick={convertToUpper}>to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={convertToLower}>to lowercase</button>
                <button className="btn btn-primary mx-1" onClick={clearText}>clear text</button>
            </div>
            <div className="container col-12" style={props.style}>
                <h5>Your Text Summary</h5>
                <p>no.of words::{text.split(" ").length} no.of characers::{text.length}</p>
                <p>takes {0.008*text.split(" ").length} minutes to read</p>
                <h5>Summary</h5>
                <p>{text}</p>
            </div>
        </>

    )
}

TextForm.defaultProps={heading:"Enter Text"};
