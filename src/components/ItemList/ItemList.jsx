import React from 'react';
import './styles.css';
import Button from '../Button/Button';
import { BiShoppingBag } from 'react-icons/bi'

function ItemList() {
  return (
    <div className='servicios container'>
        <div className='servicios__content'>
            <div className='servicios__content-title'>
                    <h3>Manicura</h3>
                    <p>Premium - 20% Off comprando desde App.</p>
            </div>
            <div className='servicios__content-img'>

            </div>
            <Button>Reservar <BiShoppingBag /></Button>
        </div>
        <div className='servicios__content'>
            <div className='servicios__content-title'>
                    <h3>Pedicure</h3>
                    <p>Con crema de almendras.</p>
            </div>
            <div className='servicios__content-img'>

            </div>
            <Button>Reservar <BiShoppingBag /></Button>
        </div>
        <div className='servicios__content'>
            <div className='servicios__content-title'>
                    <h3>Esmaltado</h3>
                    <p>con decoración.</p>
            </div>
            <div className='servicios__content-img'>

            </div>
            <Button>Reservar <BiShoppingBag /></Button>
        </div>
        
    </div>
  )
}

export default ItemList;