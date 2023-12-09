import React from "react";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function LoginComponent() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="log">
          <div className="login-title">
            <h2>Welcome!</h2>
            <p>Sign in to your account</p>
          </div>
          <form method="post">
            <div className="label-div">
              <label htmlFor="email" className="email">Email</label>
            </div>
            <div className="input-div">
              <input type="email" placeholder="" name="password" id="email"/>
            </div>
            <div className="label-div">
              <label htmlFor="password" className="password">password</label>
            </div>
            <div className="input-div">
              <input type="password" name="password" placeholder="" id="password"/>
            </div>
            <div className="button-div">
              <button type="submit">Login</button>
            </div>
            <div>
              <p>If you haven't already registered, please <Link to="/register">register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
