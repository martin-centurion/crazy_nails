import React from 'react';
import Logo from '../Logo/Logo';
import FormRegisterd from '../Form/FormRegisterd';
import './styles.css';

function Login() {
  return (
    <div className='login'>
        <Logo />
        <FormRegisterd />
    </div>
  )
}

export default Login