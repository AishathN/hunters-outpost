import React from 'react'
// import axios from 'axios'
import MissionIndex from '../src/components/missions/MissionIndex'
import Missionnew from '../src/components/missions/Missionnew'
import MissionShow from '../src/components/missions/MissionShow'
import Home from '../src/components/common/Home'
// import Select from 'react-select'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from '../src/components/common/NavBar'
import About from '../src/components/common/About'

class App extends React.Component{

  // state to store form data
  state = {
    missions: []
  }

  render(){
    return (
      <div className="app_style">
      <div>
      <BrowserRouter>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/missions" component={ MissionIndex } />
            <Route exact path="/missions/:id/" component={ MissionShow } />
          </Switch>
        </div>
      </BrowserRouter>
      <div>
        <div className="wrapper">
          <About></About>
          <Missionnew></Missionnew>
        </div>
      </div>
    </div>
    </div>
    )
} 
}
export default App
