import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {getAllUsers} from '../../lib/api'
import PerfectScrollbar from 'react-perfect-scrollbar'


class Leaderboard extends React.Component{
  
  state = {
    users:[]
  }


  async componentDidMount() {
    try {
      const res = await getAllUsers()
      this.setState({ users: res.data })
      // console.log(this.state.users)
      this.setState({users:this.state.users.sort(function(a, b) {
        return b.points - a.points;
    })})
    } catch (err) {
      console.log(err)
    }
  }

  render(){
    return (
      
      <div className="leaderboard">
        <h1>LEADERBOARD</h1>
        <PerfectScrollbar>
      {this.state.users.map(eachuser => {
        return (
          <div key={eachuser.id}>
          <h4> --- {eachuser.points} - <Link to={`/users/${eachuser.id}/`}>{eachuser.username}</Link></h4>
          </div>
            )})}
            </PerfectScrollbar>
      </div>
    )
  }
}

export default Leaderboard