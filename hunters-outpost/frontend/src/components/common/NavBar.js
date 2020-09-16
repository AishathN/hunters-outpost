import React from 'react'
import { Link } from 'react-router-dom'
import amazon from '../../assets/images/amazon1.png'
import browse from '../../assets/images/browse1.png'
import google from '../../assets/images/google.png'
import ebay from '../../assets/images/ebay.png'
import home from '../../assets/images/home1.png'
import profile from '../../assets/images/profile.png'
import logoutimg from '../../assets/images/logout.png'
import Clock from './Clock'
import { isAuthenticated, logout } from '../../lib/auth'


class NavBar extends React.Component{
  
  state = {
  }

  handleLogout = () => {
    logout()
  }


render(){
  return (
  <nav className ="navbar_style"> 
  
    <div>
      <Link to="/profile" className = "navbar-item"><img className="navimage" src={profile}></img></Link>
      <Link to="/" className = "navbar-item"><img className="navimage" src={home}></img></Link>
      <Link to="/missions" className = "navbar-item"><img className="navimage" src={browse}></img></Link>
      <a target='_blank' href = {'https://amazon.com/'} ><img className="navimage" alt="amazon" src={amazon}></img></a>
      <a target='_blank' href = {'https://google.com/'} ><img className="navimage" alt="google" src={google}></img></a>
      <a target='_blank' href = {'https://ebay.com/'} ><img className="navimage" alt="ebay" src={ebay}></img></a>
      <Link to="/" className="navbar-item" onClick={this.handleLogout}><img className="navimage" src={logoutimg} alt="logout"></img></Link>
      
    </div>
  </nav>
  )
}
}
export default NavBar