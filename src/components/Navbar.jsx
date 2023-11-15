import React from 'react'

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
        <div className="buttons">
          <label htmlFor="home">Home</label>
          <label htmlFor="menu">Menu</label>
          <label htmlFor="admin">Admin</label>
          <div className="underline"></div>
        </div>
      </div>
    </nav>
  )
}
