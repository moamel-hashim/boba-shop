import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="title">
        <h2>Boba Shop</h2>
      </div>
      <div className="tabs">
        <input type="radio" name="home" />
        <input type="radio" name="menu" />
        <input type="radio" name="admin" />
      </div>
      <div className="buttons">
        <label htmlFor="home">Home</label>
        <label htmlFor="menu">Menu</label>
        <label htmlFor="admin">Admin</label>
      </div>
      <div className="underline"></div>
    </nav>
  )
}
