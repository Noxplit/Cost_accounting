import React from 'react'
import './CostFilter.css'

const CostFilter = ({ filter, filterYear, open, diagram }) => {
	const yearChangeHandler = event => {
		filter(event.target.value)
	}
	return (
		<div>
			<div className='cost_date'>
				<div>Выбор по году</div>
				<select className='cost_date_select' value={filterYear} onChange={yearChangeHandler}>
					<option value='2023'>2023</option>
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
				</select>
        <button onClick={open} className='cost_button'>{!diagram ? 'Открыть диаграмму' : 'Закрыть диаграмму' }</button>
			</div>
		</div>
	)
}

export default CostFilter
