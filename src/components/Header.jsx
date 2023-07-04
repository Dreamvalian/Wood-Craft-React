import React from 'react';
import { ShoppingCart, User } from 'react-feather';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to='/' className='site-title'>
          <div>Wood</div>
          <div>Craft</div>
        </Link>
        <ul className='nav-header'>
          <li>
            <Link to='/product' className='nav-item'>
              products
            </Link>
          </li>
          <li>
            <Link to='/about' className='nav-item'>
              about
            </Link>
          </li>
          <li>
            <Link to='/contact' className='nav-item'>
              contact
            </Link>
          </li>
          <li>
            <a href='/' className='nav-icon'>
              <ShoppingCart strokeWidth={1} />
            </a>
          </li>
          <li>
            <a href='/login' className='nav-icon'>
              <User strokeWidth={1} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
