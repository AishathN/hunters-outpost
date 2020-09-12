import React from 'react'
import axios from 'axios'
import Left from '../common/LeftSide'
import Right from '../common/RightSide'
import { Link } from 'react-router-dom'


class Home extends React.Component{
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
      <div className="main_style">
      <Left></Left>
      <Right></Right>
      </div>
    )
  }

}

  export default Home