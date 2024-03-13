import React from 'react'
import "../../styles/Input.css"

function Input(prop: {placeholder: string}) {
  return (
    <div className='global-input'>
        <input type="text" placeholder={prop.placeholder} className="main-input" />
    </div>
  )
}

export default Input