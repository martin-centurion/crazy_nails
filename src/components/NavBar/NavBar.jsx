import React from 'react';
import './styles.css';
import { BiArrowBack, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
        <nav className='nav-bar'>
            <Link className='icono' to='/'>
                  <BiArrowBack />
            </Link>
            <Link className='icono' to='/'>
                  <BiUser />
            </Link>
        </nav>
  )
}

export default NavBar;