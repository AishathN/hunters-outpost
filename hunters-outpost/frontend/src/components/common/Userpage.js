import React from 'react'
import axios from 'axios'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { getSingleUser } from '../../lib/api'
import Jarvis from '../common/jarvis'
import { Link } from 'react-router-dom'
import Leaderboard from '../missions/Leaderboard'

class Userpage extends React.Component {
  state = {
    userInfo: [],
    owner:false,
    profileId: null,
    userNumber:null,
    search: []
  }

  async componentDidMount() {

    try {
        const userId = this.props.match.params.id
        this.setState ({userInfo: parseInt(userId)})
        const res = await getSingleUser(userId)
        this.setState({ userInfo: res.data, search: res.data.created_mission })
    } catch (err) {
      console.log(err)
    }
}

componentDidUpdate = async (prevProps) => {
  if (prevProps.location.pathname.includes('/users/') && this.props.location.pathname.includes('/users/')) {
    console.log("I am here")
    if (this.props.location.pathname !== prevProps.location.pathname) {
      const id = this.props.match.params.id
      const res = await getSingleUser(id)
      console.log(res.data)
      this.setState({ userInfo: res.data, search: res.data.created_mission })
    }
  }
}

  render(){

    console.log(this.state.search)
    return (
      <div className="wrapper">
      <div className="left_style">
      <PerfectScrollbar>
        <div className="profile_detail">
            <h1>{this.state.userInfo.username}</h1>
            <h2>{this.state.userInfo.about_me}</h2>
            <div className="profileImageDiv">
            <img src = {this.state.userInfo.profile_image} className="profileImage"></img>
            </div>
            <p>CREATED MISSIONS</p>
            {this.state.search.map(name => {
            return (
              <div><Link to={`/missions/${name.id}/`} className="texthover">{name.name} </Link>
              </div>
            )
          })}
        </div>
      </PerfectScrollbar>
      
  </div>
  <div className="right_style">
    <Jarvis></Jarvis>
    <Leaderboard></Leaderboard>
  </div>
</div>
    )}}

    export default Userpage