import React from 'react'
import axios from 'axios'
import Register from '../src/components/auth/Register'
import Login from '../src/components/auth/Login'
import MissionIndex from '../src/components/missions/MissionIndex'
import Missionnews from '../src/components/missions/Missionnew'
import Select from 'react-select'

class App extends React.Component{

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


  render(){
    return (
      <div>
        <div><Register></Register>
        </div>
        <div><Login></Login>
        </div>
        <div>
          <MissionIndex></MissionIndex>
        </div>
        <div>
          <Missionnews></Missionnews>
        </div>
      </div>
    )
}
}
export default App