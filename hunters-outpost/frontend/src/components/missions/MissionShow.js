import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'

import { createComment } from '../../lib/api.js'
// import { isAuthenticated } from '../../lib/auth'
import { getSingleMission } from '../../lib/api'
import Jarvis from '../common/jarvis'

class MissionShow extends React.Component {
  state = {
    usersLink:[],
    thismission: [],
    comments: [],
    formData:{
      text:'',
      mission:null
    },
    mission : null
  }


  async componentDidMount() {

    try {
      const missionId = this.props.match.params.id
      this.setState ({mission: parseInt(missionId)})
      const res = await getSingleMission(missionId)
      this.setState({ thismission: res.data })
      this.setState({ comments: res.data.comments })
      console.log(this.state)
    } catch (err) {
      console.log(err)
    }
    
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
    // console.log(this.state)
  }
    catch (err) {
      console.log(err.response.data) 
    }
  }

    render() {

      // console.log(this.state)
      return (
        <div className="wrapper">
        <div className="left_style">
        <PerfectScrollbar>
          <div>
          <div className="mission_detail">
            <h1>{this.state.thismission.name}</h1>
            <h4>{this.state.thismission.description}</h4>
              <div>{this.state.comments.slice(0).reverse().map(eachcomment => {
              return (
                <div key={eachcomment.createdAt}>
                <h4> --- {eachcomment.text} </h4>
                </div>
                  )})}
                  <form className="commentform" onSubmit={this.handleSubmit}>
                <textarea
                  className="textarea"
                  name="text"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.formData.text}
                />
                <div>
              <input type="submit" value="Submit" className="button2"/>
                </div>
              </form>  
                  </div>
              
              </div>
              </div>
        </PerfectScrollbar>
        
    </div>
    <div className="right_style">
      <Jarvis></Jarvis>
    </div>
  </div>
      )}
  }



      export default MissionShow