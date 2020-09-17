import React from 'react'
import Register from '../auth/Register'
import Login from '../auth/Login'
import { isAuthenticated, logout } from '../../lib/auth'
import Clock from '../common/Clock'
import map1 from '../../assets/images/map4.png'


class LoggedInHome extends React.Component{
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