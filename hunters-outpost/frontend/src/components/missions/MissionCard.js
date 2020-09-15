import React from 'react'
import { Link } from 'react-router-dom'

const MissionCard = ({ name, image, description, category, id, comments }) => (
  
<div>
  <Link to={`/missions/${id}/`}>
    <div><h3 className="missionTitle">{name}</h3></div>
  </Link>
    <div>{description}</div>
    <div></div>
  
  </div>
)

export default MissionCard