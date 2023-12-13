import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";
import { Link,useHistory } from "react-router-dom/cjs/react-router-dom.min";
axios.defaults.baseURL = 'http://localhost:8889';


export default function LoginComponent() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();
  const {login} = useAuth;
  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormData({
      ...formData, [name]: value,
    });
  };

  // const handleLogin = async() => {
  //   try {
  //     const response = await axios.post("boba-shop/admin.php", {
  //       username: formData.username,
  //       password: formData.password,
  //     });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Login failed:", error.message);
  //   }
  // };

const handleGetInfo = async () => {
  try {
    const response = await axios.get("boba-shop/admin.php", {
      params: {
        username: formData.username,
        password: formData.password,
      },
    });
    console.log(response.data);
    if(response.data.level === 2) {
      history.push('/admin')
    }
  } catch (error) {
    console.error("Error fetching information:", error.message);
  }
};
  const handleSubmit = async (event) => {
    event.preventDefault();
    handleGetInfo();
    // handleLogin();
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="log">
          <div className="login-title">
            <h2>Welcome!</h2>
            <p>Sign in to your account</p>
          </div>
          <form method="post" onSubmit={handleSubmit}>
            <div className="label-div">
              <label htmlFor="username" className="email">Username</label>
            </div>
            <div className="input-div">
              <input type="text" placeholder="" name="username" id="username" value={formData.username} onChange={handleInputChange}/>
            </div>
            <div className="label-div">
              <label htmlFor="password" className="password">password</label>
            </div>
            <div className="input-div">
              <input type="password" name="password" placeholder="" id="password" value={formData.password} onChange={handleInputChange}/>
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
