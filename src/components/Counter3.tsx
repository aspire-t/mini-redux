import React, { Component } from 'react'
import actions from '../store/actions/counter1'
import { connect } from '../react-redux'

class Counter3 extends Component {
	render() {
		let { number, add1, minus1 } = this.props
		return (
			<div>
				<p>{number}</p>
				<button onClick={add1}>+</button>
				<button onClick={minus1}>-</button>
				<button onClick={
					() => setTimeout(() => add1(), 1000)
				}>1秒后加1</button>
			</div>
		)
	}
}

// 把仓库中的状态映射为组件的属性对象
let mapStateToProps = (state: any) => state.counter1
// connect的第二个参数应该是这样
// 把dispatch方法映射为一个属性对象
// let mapDispatchToProps = (dispatch: any) => ({
// 	add1() {
// 		return { type: types.ADD1 }
// 	},
// 	minus1() {
// 		return { type: types.MINUS1 }
// 	}
// })
// connect的第二个参数可以是对象(actions)，也可以是函数(mapDispatchToProps)
export default connect(
	mapStateToProps,
	actions
)(Counter3)
