import React from 'react'
// import { getAllGigs } from '../../lib/api'
import axios from 'axios'
// import GigCard from './GigCard'

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
      <section>
        <h1>missions go here</h1>
      </section>
    )
  }
}

export default MissionIndex