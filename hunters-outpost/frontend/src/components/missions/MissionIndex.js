import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import MissionForm from '../missions/MissionForm'
// import Missionnew from '../missions/Missionnew'
import MissionCard from '../missions/MissionCard'
import MissionHome from './MissionHome'
import Jarvis from '../common/jarvis'

class MissionIndex extends React.Component {
  // state to store form data
  state = {
    missions: []
  }


//testing fetching data
  async componentDidMount() {
    try {
      const res = await axios.get('/api/missions')
      this.setState({ missions: res.data })
      console.log(this.state)
    } catch (err) {
      console.log(err)
    }
  }



  render() {
    return (
      <div className="missionBase">
    <div><MissionHome>
      </MissionHome></div>
      </div>
    )
  }
}

export default MissionIndex