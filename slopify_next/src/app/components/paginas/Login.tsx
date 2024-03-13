import Input from '../generales/Input'
import React from 'react'
import "../../styles/Login.css"

function Login() {
  return (
    <div>
        
        <div className='bubble-login'>
            <h2 className='header-login'>Login</h2>
            <div className='line-inputs'>
              <Input placeholder='Email'/>
              <Input placeholder='Password'/>
            </div>
            <p className='forgot-password'>Forgot your password?</p>
        </div>
        
    </div>
  )
}

export default Login