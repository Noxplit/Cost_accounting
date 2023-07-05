import React from 'react'
import CostForm from './CostForm'

const NewCost = ({ addCostHandler }) => {
	const saveCostData = inputCostData => {
		const newCost = {
			...inputCostData,
			id: Math.random().toString(),
		}
		addCostHandler(newCost)
	}
	return (
		<div className='new_cost'>
			<CostForm onSaveCost={saveCostData} />
		</div>
	)
}

export default NewCost
