import React from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
import Register from '../auth/Register'
import Login from '../auth/Login'
import { isAuthenticated, logout } from '../../lib/auth'
import Clock from '../common/Clock'


class LoggedInHome extends React.Component{
  // state to store form data
  state = {
    
  }


  render(){
    const isLoggedIn = isAuthenticated()
    return (
    
            <div className="spinning-loader3b">
              <div className="spinning-loaderb">
                <div className="spinning-loader2b">
              <Clock/>
              </div>
              </div>
            </div>
          
      // </div>
    )
  }

}

  export default LoggedInHome