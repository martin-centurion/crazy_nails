import React from 'react';
import './styles.css';


function Icons(props) {
  return (
    <i className='icon'>
        {props.children}
    </i>
  )
}

export default Icons;