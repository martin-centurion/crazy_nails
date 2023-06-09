import React from 'react';
import './styles.css'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Icons from '../Icons/Icons';

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
                    <p className='pass'>Olvido su contraseña?</p>
                <Link to="/servicios">
                    <Button>Continuar <Icons><HiArrowNarrowRight /></Icons></Button>
                </Link>
                </form>
                
        </div>
    </div>
  )
}

export default FormRegisterd