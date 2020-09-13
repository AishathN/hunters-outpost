import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import MissionCard from '../missions/MissionCard'
import Jarvis from '../common/jarvis'
import PerfectScrollbar from 'react-perfect-scrollbar'

import 'react-perfect-scrollbar/dist/css/styles.css'

class MissionHome extends React.Component {
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

    setInterval(this.update, 1000)
  }

  render() {
    console.log(this.state)
    return (
      <div className="wrapper">
        <div className="left_style">
          <div className="mission_spacer">
          <PerfectScrollbar>
            {this.state.missions.map(name => {
              return (
                <div key={name.id} className="missionItem">
                  <MissionCard key={name.id} {...name}/>
                  {name.id}
                </div>
              )
            })}
          </PerfectScrollbar>
          </div>
        </div>
        <div className="right_style">
          <Jarvis></Jarvis>
        </div>
      </div>
    )
  }
}

export default MissionHome