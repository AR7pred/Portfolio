import './WorkCardStyles.css'

import React from 'react'
import { NavLink } from 'react-router-dom'

const WorkCard = (props) => {
  return (
    <div className='project-card'>
    <img src={props.imgsrc} alt='physique'/>
    <h2 className='project-title'>{props.title}</h2>
    <div className='pro-details'>
     <p>{props.text}</p>
     <div className='pro-btns'>
     {
      <a href={props.view} target='_blank' rel='noreferrer' className='btn'>View</a>
     }
         {/* <NavLink to="url.com" className="btn">View</NavLink> */}
         {/* <NavLink to="url.com" className="btn"> Source</NavLink> */}
     </div>
    </div>
</div>
  )
}

export default WorkCard
