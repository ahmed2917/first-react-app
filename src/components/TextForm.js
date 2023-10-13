import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function TextForm(props) {
    const [text, setText] = useState('enter text')
    // setText = ('new');
  return (
    <div>
        <h2>{props.heading}</h2>
    <div class="mb-3">
        <textarea className="form-control" value='text' id="mybox" rows="8"></textarea>
    </div>
    <button className='btn btn-primary'>Convert to Uppercase</button>
    </div>
  )
}
TextForm.propTypes = {
    heading: PropTypes.string
}