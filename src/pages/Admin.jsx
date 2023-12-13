import React from "react";
import Navbar from "../components/Navbar";
import NewDrink from "../components/new-drink";
import Toppings from "../components/Toppings";
import Home from "./Home";
import Menu from "./Menu";
import NotFound from "./NotFound";
import {BrowserRouter as Router,Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./Login";
import { AuthProvider } from "../hooks/useAuth";
import ProtectedRoute from '../components/Protected-route';
const Admin = () => {
  return (
    <>
    <AuthProvider>
    <Router>
    <Switch>
      <Route path="/admin" component={NewDrink}/>
      <Route path="/toppings" component={Toppings}/>
      <Route path="/menu" component={Menu}/>
      <Route path="/login" component={Login}/>
      <ProtectedRoute path="/admin" component={NewDrink } level={2}/>
      <Route exact path="/" component={Home}/>
      <Route component={NotFound}/>
    </Switch>
    </Router>
    </AuthProvider>
    </>
  )
}

export default Admin;
