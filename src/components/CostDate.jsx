import React from 'react'
import './CostDate.css'
const CostDate = ({ date }) => {
	const month = date.toLocaleString('ru-RU', { month: 'long' })
	const day = date.toLocaleString('ru-RU', { day: '2-digit' })
	const year = date.getFullYear()
	return (
		<div className='cart_item_date'>
			<div>{day}</div>
			<div>{month}</div>
			<div>{year}</div>
		</div>
	)
}

export default CostDate
