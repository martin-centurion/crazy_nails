import React from 'react';
import './styles.css'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function FormRegisterd() {
  return (
    <div className='form'>
        <div className='form__content'>
                <div className='form__content-title'>
                    <h2>Hola!</h2>
                    <p>Ingrese su cuenta para continuar</p>
                </div>
                <form action="">
                    <label htmlFor="">
                        <input type="text" placeholder='Usuario' />
                    </label>
                    <label htmlFor="">
                        <input type="password" placeholder='Contraseña' />
                    </label>
                </form>
                <p className='pass'>Olvido su contraseña?</p>
                <Link to="/servicios">
                    <Button />
                </Link>
        </div>
    </div>
  )
}

export default FormRegisterd