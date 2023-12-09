import React from "react";
import Navbar from "../components/Navbar";
import NewDrink from "../components/new-drink";
import Toppings from "../components/Toppings";
import Home from "./Home";
import Menu from "./Menu";
import NotFound from "./NotFound";
import {BrowserRouter as Router,Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./Login";
const Admin = () => {
  return (
    <>
    <Router>
    <Switch>
      <Route path="/admin" component={NewDrink}/>
      <Route path="/toppings" component={Toppings}/>
      <Route path="/menu" component={Menu}/>
      <Route path="/login" component={Login}/>
      <Route exact path="/" component={Home}/>
      <Route component={NotFound}/>
    </Switch>
    </Router>
    </>
  )
}

export default Admin;
