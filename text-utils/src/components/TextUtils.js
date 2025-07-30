import React, { useState } from 'react'

export default function TextUtils(props){
    const [text, setText]=useState('');
     const convertToUpper =()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success")
    }
    const handleOnChange=(event)=>{
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
        <>
        <div className="mb-3 container ">
            <h2>Enter Your Text Here</h2>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={handleOnChange}></textarea>
            <div className='mt-3 '>
                <button className="btn btn-primary mx-2" type="submit" onClick={convertToUpper}>To UpperCase</button>
                <button className="btn btn-primary mx-2" type="submit" onClick={convertToLower}>To LowerCase</button>
                <button className="btn btn-primary mx-2" type="submit" onClick={clearText}>Clear</button>
            </div>
            <div className='mt-3'>
                <h2>Stats</h2>
                <p>No of character:: {text.length} No of words::{text.split(" ").length}</p>
                <p>Takes {text.length>1?text.split(" ").length*0.25:0} seconds to read</p>
            </div>
            <div className='mt-3'>
                <h2>Summary</h2>
                <p>{text}</p>
            </div>
        </div>
        </>
    );
}   