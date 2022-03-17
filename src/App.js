/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {useState} from 'react'
import React from "react";
import Navbar from "./Navbar" 
import Home  from "./Home"
const App = () => {

const changeValue = ()=>{
  setValue(currentValue + 1)
}
  return (
<div className="blogApp">
<Navbar />
<div className="content">
<Home />
</div>
</div>

  );
};

export default App;
