import React from 'react'
import { Link } from 'react-router-dom'

const MissionCard = ({ name, image, description, category, id, comments }) => (
  
<div>
  <Link to={`/api/missions/show`}>
    <div>{name}</div>
  </Link>
    <div>{description}</div>
    <div></div>
  
  </div>
)

export default MissionCard