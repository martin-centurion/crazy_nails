import React from 'react';
import NavBar from '../NavBar/NavBar';
import ItemList from '../ItemList/ItemList';

function ItemListContainer() {
  return (
    <div className='container'>
        <NavBar />
        <ItemList />
    </div>
  )
}

export default ItemListContainer;