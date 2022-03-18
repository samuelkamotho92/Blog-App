/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import {Link} from 'react-router-dom';

//create a component

const Navbar = () => {

    const title  = 'SamKamDev Projects'
    return ( 
<nav className='navbar'>
    <h1>{title}</h1>
<div className="links">
    <Link to="/">Home</Link>
    <Link to="#">About Project</Link>
    <Link to="/createProj" style={{color:"pink",}}>Create A Project</Link>
</div>
</nav>

     );
}
 
export default Navbar;