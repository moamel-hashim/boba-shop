import React from "react";
import {Link} from "react-router-dom"
export default function HandleHome () {
  return (
    <>
    <div>
    <div className="background"></div>
      <div className="hero-container">
        <div>
          <h2>Welcome to our boba shop</h2>
          <p>Please click on view Menu to check out our verity of drinks that we offer currently</p>
        </div>
        <div className="menu-button">
          <Link to="/menu">Menu</Link>
        </div>
      </div>
    </div>
    </>
  )
}
