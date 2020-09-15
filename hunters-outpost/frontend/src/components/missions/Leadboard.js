import React from 'react'
import axios from 'axios'
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
      console.log(this.state)
    } catch (err) {
      console.log(err)
    }
  }

  render(){
    return (
      
      <div className="leaderboard">
        <h1>LEADERBOARD</h1>
        <PerfectScrollbar>
      {this.state.users.slice(0).reverse().map(eachuser => {
        return (
          <div key={eachuser.id}>
          <h4> --- {eachuser.points} - {eachuser.username}</h4>
          </div>
            )})}
            </PerfectScrollbar>
      </div>
    )
  }
}

export default Leaderboard