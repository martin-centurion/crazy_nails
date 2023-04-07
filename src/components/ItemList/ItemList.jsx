import React from 'react';
import './styles.css';
import Button from '../Button/Button';

function ItemList() {
  return (
    <div className='servicios container'>
        <div className='servicios__content'>
            <div className='servicios__content-title'>
                    <h3>Manicura</h3>
            </div>
            <div className='servicios__content-img'>

            </div>
            
        </div>
        <Button>Reservar</Button>
    </div>
  )
}

export default ItemList;