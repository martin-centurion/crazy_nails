import React from 'react';
import './styles.css';
import { BiArrowBack } from 'react-icons/bi';
import { BsList } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
        <nav className='nav-bar'>
            <Link className='icono' to={props.onTouchButton}>
                  <BiArrowBack />
            </Link>
            <Link className='icono' to='/'>
                  <BsList />
            </Link>
        </nav>
  )
}

export default NavBar;