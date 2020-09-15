import React from 'react'
import axios from 'axios'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { isAuthenticated , getUserId} from '../../lib/auth'
import { getSingleUser } from '../../lib/api'
import Jarvis from '../common/jarvis'
import Leaderboard from '../missions/Leaderboard'

class Profile extends React.Component {
  state = {
    userInfo: [],
    owner:false,
    profileId: null,
    userNumber:null
  }

 
  async componentDidMount() {

    try {
      const res = await (getSingleUser(getUserId()))
      this.setState({userInfo: res.data})
    } catch (err) {
      console.log(err)
    }
  }

  render(){
    console.log(this.state.userInfo)
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
        </div>
      </PerfectScrollbar>
      
  </div>
  <div className="right_style">
    <Jarvis></Jarvis>
    <Leaderboard></Leaderboard>
  </div>
</div>
    )}
}

export default Profile