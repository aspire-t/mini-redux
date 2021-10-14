import React from 'react'
import { useSelector, useDispatch } from '../react-redux'

const Counter4 = (props: any) => {
	// 在函数组件中可以使用useSelector替换mapStateToProps
	const counter2 = useSelector((state: any) => state.counter2)
	const dispatch = useDispatch()
	return (
		<div>
			<p>{counter2.number}</p>
			<button onClick={() => dispatch({ type: 'ADD2' })}>+</button>
			<button onClick={() => dispatch({ type: 'MINUS2' })}>-</button>
		</div>
	)
}

export default Counter4
