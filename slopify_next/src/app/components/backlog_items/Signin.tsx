import Input from '../generales/Input'
import React from 'react'
import "../../styles/Signin.css"

function Signin() {
  return (
    <div>
        
        <div className='bubble-login'>
            <h2 className='header-login'>Sigin</h2>
            <div className='line-inputs'>
              <Input placeholder='First Name'/>
              <Input placeholder='Last Name'/>
              <Input placeholder='Email'/>
              <Input placeholder='Password'/>
            </div>
            <button className='login-button'>Signin</button>
            <a href='/login' className='forgot-password'>Already have an account?</a>
        </div>
        
    </div>
  )
}

export default Signin