import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css"
function components() {
  return (
      <div className='containerHeader'>
          <span>
            <Link to="/carrinho" style={{color:"white"}}>
          <i class="fas fa-shopping-cart"></i>
          </Link>
          </span>
      </div>
  )
}

export default components;