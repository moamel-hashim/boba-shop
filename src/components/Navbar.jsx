import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Navbar() {
  return (
    <nav>
      <div className="tabs">
        <div className='title'>
          <h3>boba shop</h3>
        </div>
        <div className='nav-links'>
          <ul>
            <li><Link to=''>Home</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/admin'>Admin</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
