import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './components/pages/Home.js';
import AboutUs from "./components/pages/AboutUs.js";
import SignUp from "./components/pages/SignUp.js";
import Login from "./components/pages/Login.js";

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/aboutus' element={<AboutUs/>}/>
          <Route exact path='/signup' element={<SignUp/>}/>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
