import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = ( ) => (
  <nav> 
    <div className ="navbarstyle">
      <Link to="/" className = "navbar-item">HOME</Link  >
      <Link to="/missions" className = "navbar-item">BROWSE</Link  >
    </div>
  </nav>
) 
export default NavBar