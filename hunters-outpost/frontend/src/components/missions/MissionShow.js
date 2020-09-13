import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { createComment, deleteMission } from '../../lib/api.js'
// import { isAuthenticated } from '../../lib/auth'
import { getSingleMission } from '../../lib/api'

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
      console.log(this.state)
    } catch (err) {
      console.log(err)
    }
  }

    render() {
      return (
        <div><h1>hello world</h1></div>
      )}
  }



      export default MissionShow