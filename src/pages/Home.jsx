import React from 'react';
import Navbar from '../components/Navbar'
import Menu from './Menu';
import HandleHome from '../components/HomeComponent';

const Home = () => {
  return (
    <div className="container">
      <Navbar/>
      <HandleHome/>
    </div>
  )
}

export default Home;
