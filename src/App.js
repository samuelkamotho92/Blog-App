/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {useState} from 'react'
import React from "react";
import Navbar from "./Navbar" 
import Home  from "./Home"

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CreateProj from './createProj';

const App = () => {
  return (
    <Router>
<div className="blogApp">
<Navbar />
<div className="content">
  <Routes >
  <Route path="/" element={<Home/>} />
  <Route path="/createProj" element={<CreateProj/>} />
  {/* <Route path='/About me' element={<About/>} /> */}
  </Routes>
</div>
</div>
    </Router>
  );
};

export default App;
