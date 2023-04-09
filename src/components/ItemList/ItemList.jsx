import React from 'react';
import './styles.css';
import Button from '../Button/Button';
import { BiShoppingBag } from 'react-icons/bi';
import Icons from '../Icons/Icons';
import { Link } from 'react-router-dom';

function ItemList({ services }) {
  return (
    
    <div className='servicios container'>
        {services.map((service) => (
        <div className='servicios__content' key={service.id}>
            
                <div className='servicios__content-title'>
                    <h3>{service.name}</h3>
                    <p>{service.include} / {service.category}</p>
                <div className='servicios__content-img'>
                    <img src={service.img200} alt={service.name} />
                </div>
                    <h4>Precio: ${service.price}</h4>
                    <Link to={`/servicio/${service.id}`}>
                        <Button>Más Info <Icons><BiShoppingBag /></Icons></Button>
                    </Link>
                </div>
                
            
            
        </div>    
        ))

        }    
    </div>
    
  )
}

export default ItemList;