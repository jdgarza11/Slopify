import Input from '../generales/Input'
import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div>
        
        <div className='bubble-login'>
            Login
            <Input placeholder='Correo'/>
            <Input placeholder='Contraseña'/>
        </div>
        
    </div>
  )
}

export default Login