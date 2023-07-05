import React from 'react'
import './DiagramBar.css'

const DiagramBar = ({value,label}) => {

console.log(value);


  return (
    <div className='diagram_bar' >
        <div className='diagram_bar_label'>{label}</div>
        <div className='diagram_bar_value'>{value} $</div>
    </div>
  )
}

export default DiagramBar