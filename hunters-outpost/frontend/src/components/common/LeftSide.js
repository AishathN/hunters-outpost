import React from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
import Register from '../auth/Register'
import Login from '../auth/Login'
import { isAuthenticated, logout } from '../../lib/auth'
import LoggedInHome from './LoggedinHome'


class Left extends React.Component{
  // state to store form data
  state = {
    
    missions: []
  }


  render(){
    const isLoggedIn = isAuthenticated()
    return (
      <div className="maxLeftWidth">
      <div className="auth_style">
        {!isLoggedIn && 
      <div><Register></Register>
        </div>
        }
        {!isLoggedIn &&  
        <div><Login></Login>
        </div>
        }
        
      </div>
      {isLoggedIn &&  
        <div className="loghome"><LoggedInHome></LoggedInHome>
        </div>
        }
    </div>
    )
  }

}

  export default Left