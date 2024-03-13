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
            <button className='login-button'>Login</button>
            <a className='forgot-password'>Forgot your password?</a>
            <a href='/signin' className='forgot-password'>Create a Count</a>
        </div>
        
    </div>
  )
}

export default Login