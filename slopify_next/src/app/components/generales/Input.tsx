import React from 'react'
import "./Input.css"

function Input(prop: {placeholder: string}) {
  return (
    <div className='global-input'>
        <input type="text" placeholder={prop.placeholder} className="input" />
    </div>
  )
}

export default Input