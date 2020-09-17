import React from 'react'
import axios from 'axios'
import MissionCard from '../missions/MissionCard'
import MissionHome from './MissionHome'
import Jarvis from '../common/jarvis'

class MissionIndex extends React.Component {
  state = {
    missions: []
  }


//testing fetching data
  async componentDidMount() {
    try {
      const res = await axios.get('/api/missions')
      this.setState({ missions: res.data })
      // console.log(this.state)
    } catch (err) {
      console.log(err)
    }
  }



  render() {
    return (
    <MissionHome>
      </MissionHome>
    )
  }
}

export default MissionIndex