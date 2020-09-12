import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import MissionCard from '../missions/MissionCard'

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
  }



  render() {
    console.log(this.state)
    return (
      <section className="mission_style">
        <div>
          {this.state.missions.map(name => {
            return (
              <div key={name.id}>
                <MissionCard key={name.id} {...name}/>
                {name.id}
              </div>
            )
          })}
        </div>

      </section>
    )
  }
}

export default MissionHome