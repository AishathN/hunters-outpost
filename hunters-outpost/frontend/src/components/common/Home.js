import React from 'react'
import axios from 'axios'
import Left from '../common/LeftSide'
import Jarvis from '../common/jarvis'
import Leaderboard from '../missions/Leaderboard'


class Home extends React.Component{
  state = {
    missions: []
  }


//testing fetching data
  async componentDidMount() {
    try {
      const res = await axios.get('/api/missions')
      this.setState({ missions: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render(){
    return (
      <div className="wrapper">
        <div className="left_style">
          <Left></Left>
          </div>
        <div className="right_style">
          <Jarvis></Jarvis>
          <Leaderboard></Leaderboard>
        </div>
      </div>
    )
  }

}

  export default Home