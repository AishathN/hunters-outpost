import React from 'react'
import { Link } from 'react-router-dom'


class Jarvis extends React.Component {

state = {
  message:'Hello'
}

  render() {
    return (
    <div className="jarvis_body">
      <div className="jarvis_notched :hover">
        <div className="spinning-loader3">
          <div className="spinning-loader">
            <div className="spinning-loader2">
              <div className="spinning-loader4">
                <div className="jarvis_core">
                <Link to="/missions"><div className="jarvis_glow">
                  </div></Link>
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