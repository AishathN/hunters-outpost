import React from 'react'
import { Link } from 'react-router-dom'
import amazon from '../../assets/images/amazon1.png'
import browse from '../../assets/images/browse1.png'
import google from '../../assets/images/google.png'
import home from '../../assets/images/home1.png'

const NavBar = ( ) => (
  <nav className ="navbar_style"> 
    <div>
      <Link to="/" className = "navbar-item"><img className="navimage" src={home}></img></Link>
      <Link to="/missions" className = "navbar-item"><img className="navimage" src={browse}></img></Link>
      <a href = {'https://amazon.com/'}><img className="navimage" src={amazon}></img></a>
      <a href = {'https://google.com/'}><img className="navimage" src={google}></img></a>
      
    </div>
  </nav>
) 
export default NavBar