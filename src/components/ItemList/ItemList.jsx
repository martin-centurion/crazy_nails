import React from 'react';
import './styles.css';
import Button from '../Button/Button';
import { BiShoppingBag } from 'react-icons/bi'
import Icons from '../Icons/Icons';

function ItemList() {
  return (
    <div className='servicios container'>
        <div className='servicios__content'>
            <div className='servicios__content-title'>
                    <h3>Manicura</h3>
                    <p>20% Off desde App.</p>
            </div>
            <div className='servicios__content-img'>
                <p>Imágen</p>
            </div>
            <Button>Más Info <Icons><BiShoppingBag /></Icons></Button>
        </div>
        <div className='servicios__content'>
            <div className='servicios__content-title'>
                    <h3>Pedicure</h3>
                    <p>Crema de almendras.</p>
            </div>
            <div className='servicios__content-img'>
                <p>Imágen</p>
            </div>
            <Button>Más Info <Icons><BiShoppingBag /></Icons></Button>
        </div>
        <div className='servicios__content'>
            <div className='servicios__content-title'>
                    <h3>Esmaltado</h3>
                    <p>con decoración.</p>
            </div>
            <div className='servicios__content-img'>
                <p>Imágen</p>
            </div>
            <Button>Más Info <Icons><BiShoppingBag /></Icons></Button>
        </div>
        <div className='servicios__content'>
            <div className='servicios__content-title'>
                    <h3>Esmaltado</h3>
                    <p>con decoración.</p>
            </div>
            <div className='servicios__content-img'>
                <p>Imágen</p>
            </div>
            <Button>Más Info <Icons><BiShoppingBag /></Icons></Button>
        </div>
        <div className='servicios__content'>
            <div className='servicios__content-title'>
                    <h3>Manicura</h3>
                    <p>20% Off desde App.</p>
            </div>
            <div className='servicios__content-img'>
                <p>Imágen</p>
            </div>
            <Button>Más Info <Icons><BiShoppingBag /></Icons></Button>
        </div>
        <div className='servicios__content'>
            <div className='servicios__content-title'>
                    <h3>Pedicure</h3>
                    <p>Crema de almendras.</p>
            </div>
            <div className='servicios__content-img'>
                <p>Imágen</p>
            </div>
            <Button>Más Info <Icons><BiShoppingBag /></Icons></Button>
        </div>
        
    </div>
  )
}

export default ItemList;