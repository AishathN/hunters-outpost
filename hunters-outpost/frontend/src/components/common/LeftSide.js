import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Register from '../auth/Register'
import Login from '../auth/Login'


class Left extends React.Component{
  // state to store form data
  state = {
    missions: []
  }


//testing fetching data
  // async componentDidMount() {
  //   try {
  //     const res = await axios.get('/api/missions')
  //     this.setState({ missions: res.data })
  //     console.log(this.state)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  render(){
    return (
      <div className="left_style">
      <h1>This is the Left component</h1>
      <div><Register></Register>
        </div>
        <div><Login></Login>
        </div>
      </div>
    )
  }

}

  export default Left