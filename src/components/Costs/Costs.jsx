import React, { useState } from 'react'
import './Costs.css'
import CostFilter from '../CostFilter.jsx'
import CostsList from './CostsList.js'
import CostsDiagram from './CostsDiagram'

const Costs = ({ costs }) => {
	const [year, setYear] = useState('2022')
	const costFilterHandler = event => {
		setYear(event)
	}

	const filteredCost = costs.filter(cost => {
		return cost.date.getFullYear() === Number(year)
	})

  const [openDiagram, setOpenDiagram] = useState(false)

	return (
		<div className='costs'>
			<CostFilter diagram={openDiagram} filterYear={year} open={() =>setOpenDiagram(!openDiagram)} filter={costFilterHandler} />
      {openDiagram && <CostsDiagram  costs={filteredCost}/>}
			<CostsList filteredCost={filteredCost} />
		</div>
	)
}

export default Costs
