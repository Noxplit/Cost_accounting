import { useState } from 'react'
import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost'
import './index.css'

const INITIAL_COSTS = [
	{ id: 'c1', date: new Date(2021, 11, 20), name: 'Холодильник', amount: 999.99 },
	{ id: 'c2', date: new Date(2021, 1, 15), name: 'Macbook', amount: 1299.99 },
	{ id: 'c3', date: new Date(2022, 1, 19), name: 'Playstation 5', amount: 599.99 },
]


function App() {
	const [costs, setCosts] = useState(INITIAL_COSTS)

	const addCostHandler = cost => {
		setCosts(prev => {
			return [cost, ...prev]
		})
	}

 

	return (
		<div className='app'>
			<NewCost addCostHandler={addCostHandler} />
			<Costs costs={costs} />
		</div>
	)
}

export default App
