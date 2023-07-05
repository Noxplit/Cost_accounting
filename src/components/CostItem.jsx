import './CostItem.css'
import React from 'react'
import CostDate from './CostDate'
import Card from './UI/Card'

const CostItem = props => {
	return (
		<Card className='cart_item'>
			<CostDate date={props.date} />
			<h2>{props.name}</h2>
			<div className='cart_item_price'>{props.amount} $</div>
		</Card>
	)
}

export default CostItem
