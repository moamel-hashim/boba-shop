import React from "react";
import Navbar from "../components/Navbar";
import NewDrink from "../components/new-drink";
import Toppings from "../components/Toppings";
import Home from "./Home";
import Menu from "./Menu";
import {BrowserRouter as Router,Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

const Admin = () => {
  return (
    <>
    <Router>
    <Switch>
      <Route path="/admin" component={NewDrink}/>
      <Route path="/toppings" component={Toppings}/>
      <Route path="/menu" component={Menu}/>
      <Route path="" component={Home}/>
    </Switch>
    </Router>
    </>
  )
}

export default Admin;
