import React from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
import Register from '../auth/Register'
import Login from '../auth/Login'


class Left extends React.Component{
  // state to store form data
  state = {
    
    missions: []
  }


  render(){
    return (
      <div className="auth_style">
      <div><Register></Register>
        </div>
        <div><Login></Login>
        </div>
      </div>
    )
  }

}

  export default Left