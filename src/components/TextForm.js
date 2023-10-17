import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    const handleclickup = () => {
        let new_text = text.toUpperCase();
        setText(new_text);
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handlelo=()=>{
        setText(text.toLowerCase());
    }

    const handleclear = () =>{
        setText('');
    }

    const [text, setText] = useState('')

  return (
    <>
    <div>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleclickup}>Convert to Uppercase</button><br></br>
        <button className='btn btn-primary my-2' onClick={handlelo}>Convert to Lowercase</button><br></br>
        <button className='btn btn-primary my-2' onClick={handleclear}>Clear</button>

    </div>
    <div className='container my-3'>
        <h2>Your Text Summary</h2>
        <p>{text.split(' ').length -1} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
TextForm.propTypes = {
    heading: PropTypes.string
}