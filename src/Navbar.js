/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

//create a component

const Navbar = () => {

    const title  = 'SamKamDev Projects'
    return ( 
<nav className='navbar'>
    <h1>{title}</h1>
<div className="links">
    <a href="#">Home</a>
    <a href="#">About Project</a>
    <a href="#" style={{color:"pink",}}>Create A Project</a>
</div>
</nav>

     );
}
 
export default Navbar;