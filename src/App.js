
import React from "react";
import Navbar from "./Navbar.js";
import './App.css';
import './Style.css';
import './Popup.css';
import './Home.css';
import Application from './Application.js';
import Display from "./Display.js";
import Creditcard from './creditcard.js';
import Footer from './Footer.js';
import Home from './Home.js';
import Tracking from './Tracking.js';
import HomeTrack from "./HomeTrack.js";
// import 'bootstrap/dist/css/bootstrap.min.css';



import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom";




const App = () => {

  return (
  <>
    <Navbar />
    <Footer />
  
  <Routes>     
    <Route path='/' Component={Home}/>
    <Route path="/application" Component={Application}/>
    <Route path="/display" element={<Display/>} />
    <Route path="/credit" Component={Creditcard}/>
    <Route path="/track" Component={Tracking}/>
    <Route path="/HT" Component={HomeTrack}/>
    
  </Routes>
 
  </>
  );
}

export default App;
