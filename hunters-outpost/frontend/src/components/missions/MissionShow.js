import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'

import { createComment } from '../../lib/api.js'
import { isAuthenticated , getUserId} from '../../lib/auth'
import { getSingleMission , deleteMission, getSingleUser } from '../../lib/api'
import Jarvis from '../common/jarvis'
import Leaderboard from './Leaderboard.js'

class MissionShow extends React.Component {
  state = {
    usersLink:[],
    thismission: [],
    comments: [],
    formData:{
      text:'',
      mission:null
    },
    mission : null,
    missionposter: null,
    category:[],
    missionposterid: null,
    owner:false,
    commenterData:[]
  }


  async componentDidMount() {

    try {
      const missionId = this.props.match.params.id
      this.setState ({mission: parseInt(missionId)})
      const res = await getSingleMission(missionId)
      this.setState({ thismission: res.data })
      this.setState({ comments: res.data.comments })
      this.setState({ missionposter: res.data.owner.username})
      this.setState({ category: res.data.category })
      this.setState({ missionposterid: res.data.owner.id})
      
    } catch (err) {
      console.log(err)
    }
    // const currentUser = getUserId()
    // console.log(currentUser)
    // console.log(this.state.missionposterid)
    // if (getUserId() == this.state.missionposterId){
    //   this.setState({owner:true})
    //   console.log(this.state.owner)
    // }
    
  }


  handleChange = mission => {
    const formData = { ...this.state.formData, [mission.target.name]: mission.target.value , mission: this.state.mission}
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const missionId = this.props.match.params.id
    try {
    const res = await createComment(this.state.formData)
    const res3 = await axios.get(`/api/missions/${missionId}`)
    this.setState({ thismission: res3.data })
    this.setState({ comments: res3.data.comments })
  }
    catch (err) {
      console.log(err.response.data) 
    }
  }

  handleDelete = async () => {
    const missionId = this.props.match.params.id
    try {
      await deleteMission(missionId)
      this.props.history.push('/missions')
    } catch (err) {
      console.log(err.response.data)
    }
  }

  handleUpvote = async (userid) => {
    try {
        const res = await (getSingleUser(userid))
        this.setState({ commenterData: res.data})
        console.log(res.data)
    } catch (err) {
      console.log(err)  
    }
  }

  //on button click 
  //get userdata for commenter (eachcomment.owner.id)
  //modify userdata (points plus one)
  //send userdata in put request to db


    render() {
      return (
        <div className="wrapper">
        <div className="left_style">
        <PerfectScrollbar>
          <div className="mission_detail">
            <h1>{this.state.thismission.name}</h1>
            <h4>{this.state.thismission.description}</h4>
            <div><p>Listed in : </p>{this.state.category.map(item => {
              return (
              <h3 key={item.id}>  {item.name}  </h3>)})} </div>
            <div className="missionImage wrap">
            <img src={this.state.thismission.image}></img>
            </div>
            <h4>Posted by - {this.state.missionposter} </h4> 
            {(getUserId() == this.state.missionposterid) && <button onClick={this.handleDelete} className="buttonstyle">Delete</button>}
              <div>{this.state.comments.slice(0).reverse().map(eachcomment => {
              return (
                <div key={eachcomment.createdAt}>
                <h4> --- {eachcomment.text} - {eachcomment.owner.username}  {(getUserId() == this.state.missionposterid) && <button onClick={() => this.handleUpvote(eachcomment.owner.id)}> upvote </button>}</h4>
                </div>
                  )})}
                  {isAuthenticated() && <form className="commentform" onSubmit={this.handleSubmit}>
                <textarea
                  className="input textyfield textareabg"
                  name="text"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.formData.text}
                />
                <div>
              <input type="submit" value="Submit" className="button2"/>
                </div>
              </form>  }
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



      export default MissionShow