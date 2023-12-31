import React from 'react'
import CostItem from '../CostItem'

const CostsList = ({ filteredCost }) => {
	if (filteredCost.length === 0) {
		return <h1 className='costs_empty'>Списки за этот год отсутсвуют</h1>
	}

	return (
		<div>
			{filteredCost.map(cost => (
				<CostItem date={cost.date} key={cost.id} amount={cost.amount} name={cost.name} />
			))}
		</div>
	)
}

export default CostsList
