import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Navbar() {
  return (
    <nav>
      <div className="tabs">
        <div className='title'>
          <h3>boba shop</h3>
        </div>
        <input type="radio" name="home" />
        <input type="radio" name="menu" />
        <input type="radio" name="admin" />
        <input type="radio" name='login'/>
        <div className="buttons">
          <label htmlFor="home"><Link to='/'>Home</Link></label>
          <label htmlFor="menu"><Link to='/menu'>Menu</Link></label>
          <label htmlFor="admin"><Link to='/admin'>Admin</Link></label>
          <label htmlFor="login"><Link to='/login'>Login</Link></label>
          <div className="underline"></div>
        </div>
      </div>
    </nav>
  )
}
