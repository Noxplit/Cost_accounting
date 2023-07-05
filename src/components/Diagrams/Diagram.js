import React from 'react'
import DiagramBar from './DiagramBar'
import './Diagram.css'

const Diagram = ({ dataSet }) => {
  console.log(dataSet);
	return (
		<div className='diagram'>
			{dataSet.map(data => (
				<DiagramBar value={data.value} key={data.label} label={data.label}  />
			))}
		</div>
	)
}

export default Diagram
