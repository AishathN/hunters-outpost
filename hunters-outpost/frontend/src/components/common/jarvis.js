import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import MissionForm from '../missions/MissionForm'
// import Missionnew from '../missions/Missionnew'
// import MissionCard from '../missions/MissionCard'
// import MissionHome from './MissionHome'

class Jarvis extends React.Component {


  render() {
    return (
    <div className="jarvis_body">
      <div className="jarvis_notched :hover">
        <div class="spinning-loader3">
          <div class="spinning-loader">
            <div class="spinning-loader2">
              <div class="spinning-loader4">
              <div class="jarvis_core">
                <div className="jarvis_glow">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Jarvis