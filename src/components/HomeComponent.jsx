import React from "react";
import {Link} from "react-router-dom";
import Navbar from "./Navbar";
export default function HandleHome () {
  return (
    <>
      <div className="hero-container">
        <Navbar/>
        <div className="hero-text-container">
        <div className="hero-text">
        <div>
          <h2>welcome to <br /> boba shop</h2>
        </div>
        <div className="menu-button">
          <Link to="/menu">Menu</Link>
        </div>
        </div>
        </div>
      </div>
    </>
  )
}
