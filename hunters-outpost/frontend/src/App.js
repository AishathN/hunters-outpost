import React from 'react'
import axios from 'axios'
import Register from '../src/components/auth/Register'
import Login from '../src/components/auth/Login'
import MissionIndex from '../src/components/missions/MissionIndex'
import Missionnew from '../src/components/missions/Missionnew'
import Home from '../src/components/common/Home'
// import Select from 'react-select'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from '../src/components/common/NavBar'

class App extends React.Component{

  // state to store form data
  state = {
    missions: []
  }


//testing fetching data
  // async componentDidMount() {
  //   try {
  //     const res = await axios.get('/api/missions')
  //     this.setState({ missions: res.data })
  //     console.log(this.state)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }


  render(){
    return (
      <div>
      <div>
      <BrowserRouter>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/missions" component={ MissionIndex } />
            {/* <Route path="/*" component={Error} /> */}
          </Switch>
        </div>
      </BrowserRouter>
      <div>
        <div>
          <Missionnew></Missionnew>
        </div>
      </div>
    </div>
    </div>
    )
} 
}
export default App
