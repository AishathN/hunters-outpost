import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { createComment, deleteMission } from '../../lib/api.js'
// import { isAuthenticated } from '../../lib/auth'
import { getSingleMission } from '../../lib/api'
import Jarvis from '../common/jarvis'

class MissionShow extends React.Component {
  state = {
    mission: [],
    comments: [],
    formData:{
      text:'',
    }
  }

  async componentDidMount() {

    try {
      const missionId = this.props.match.params.id
      const res = await getSingleMission(missionId)
      this.setState({ mission: res.data })
      this.setState({ comments: res.data.comments })
      console.log(this.state)
    } catch (err) {
      console.log(err)
    }
  }

    render() {
      return (
        <div>
        <div>
          <h1>{this.state.mission.name}</h1>
          <h4>{this.state.mission.description}</h4>
        </div>
        <Jarvis></Jarvis>
        </div>
      )}
  }



      export default MissionShow