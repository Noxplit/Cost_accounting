import React, { useState } from 'react'
import './CostForm.css'

const CostForm = ({ onSaveCost }) => {
	// const [form, setForm] = useState({ name: '', amount: '', date: '' })
	const [inputName, setName] = useState('')
	const [inputAmount, setAmount] = useState('')
	const [inputDate, setDate] = useState('')
	const [closeInput, setCloseInput] = useState(true)

	const newChangeHandler = event => {
		setName(event.target.value)
		// setForm(prev => {
		// 	return { ...prev, name: event.target.value }
		// })
	}
	const newAmountHandler = event => {
		setAmount(event.target.value)
		// setForm({ ...form, amount: event.target.value })
	}
	const newDateHandler = event => {
		setDate(event.target.value)
		// setForm({ ...form, date: event.target.value })
	}

	const submitHandler = event => {
		event.preventDefault()
		const costData = {
			name: inputName,
			amount: inputAmount,
			date: new Date(inputDate),
		}
		onSaveCost(costData)
		setName('')
		setAmount('')
		setDate('')

	}
	return (
		<div>
			{closeInput ? (
				<form onSubmit={submitHandler} className='cost_form'>
					<div className='cost_form__control'>
						<label className='cost_lable'>Название</label>
						<input
							onChange={newChangeHandler}
							value={inputName}
							className='cost_form__input'
							type='text'
						/>
					</div>
					<div className='cost_form__control'>
						<label className='cost_lable'>Сумма</label>
						<input
							value={inputAmount}
							onChange={newAmountHandler}
							className='cost_form__input'
							type='number'
							min='0.01'
							step='0.01'
						/>
					</div>
					<div className='cost_form__control'>
						<label className='cost_lable'>Дата</label>
						<input
							value={inputDate}
							onChange={newDateHandler}
							className='cost_form__input'
							type='date'
							min='2019-01-01'
							step='2022-12-31'
						/>
					</div>
					<div className='cost_form_actions'>
						<button  className='cost_button' type='submit'>
							Добавить расход
						</button>
						<button onClick={() => setCloseInput(!closeInput)}  className='cost_button' type='submit'>
							Отмена
						</button>
					</div>
				</form>
			) : (
				<div className='cost_form'><button onClick={() => setCloseInput(!closeInput)}  className='cost_button'>Добавить новый расход</button></div>
			)}
		</div>
	)
}

export default CostForm
