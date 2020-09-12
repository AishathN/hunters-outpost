import React from 'react'
import axios from 'axios'
// import MissionForm from '../missions/MissionForm'
// import Missionnew from '../missions/Missionnew'

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
      <section className="mission_style">
        <h1>Hello world, this is the mission component</h1>
      </section>
    )
  }
}

export default MissionIndex