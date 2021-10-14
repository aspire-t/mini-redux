/**
 * 
 * @param {*} reducer 处理器
 * @param {*} preloadedState 初始状态 
 * @returns 
 */
const createStore = (reducer, preloadedState) => {
	let state = preloadedState
	let listeners = []

	function getState () {
		return state
	}

	function dispatch (action) {
		// 根据老状态和action动作，计算新状态
		state = reducer(state, action)
		listeners.forEach(l => l())
		return action
	}

	function subscribe (listener) {
		listeners.push(listener)
		// subscribe会返回一个取消订阅的函数
		return () => {
			listeners = listeners.filter(l => l !== listener)
		}
	}

	dispatch({ type: '@@REDUX/INIT' })

	return {
		getState, // 用来获取当前仓库中的状态
		dispatch, // 向仓库派发动作
		subscribe // 用来订阅仓库中的状态的变化
	}
}

export default createStore
