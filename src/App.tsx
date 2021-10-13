import { Component } from 'react'
import { createStore, bindActionCreators } from './redux'

const INCREMENT = 'ADD'
const DECREMENT = 'MINUS'

const reducer = (state = initState, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return { number: state.number + 1 }
    case DECREMENT:
      return { number: state.number - 1 }
    default:
      return state
  }
}

// 决定了store中的初始值，如果这里是1，点击add setState的值变为2
let initState = { number: 1 }

// 创建仓库
const store = createStore(reducer, initState)

function add() {
  return { type: 'ADD' }
}

function minus() {
  return { type: 'MINUS' }
}

const actions = { add, minus }

// boundActions用来简化操作的，或者说是用来让代码更清晰的
const boundActions = bindActionCreators(actions, store.dispatch)

class Counter extends Component {
  public unsubscribe: any
  public state: Record<string, any>
  constructor(props: any) {
    super(props)
    this.state = { number: 0 }
  }

  componentDidMount() {
    // 订阅，用unsubscribe 来取消订阅
    this.unsubscribe = store.subscribe(() => this.setState({ number: store.getState().number }))
  }

  componentWillUnmount() {
    // 取消订阅
    this.unsubscribe()
  }

  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        {/* 点击事件用来派发 */}
        <button onClick={() => store.dispatch({ type: 'ADD' })}>+</button>
        <button onClick={() => store.dispatch({ type: 'MINUS' })}>-</button>
        <button onClick={
          () => {
            setTimeout(() => {
              store.dispatch({ type: 'ADD' })
            }, 1000)
          }
        }>1秒后加1</button>
        <div>boundActions</div>
        <button onClick={boundActions.add}>+</button>
        <button onClick={boundActions.minus}>-</button>
        <button onClick={
          () => {
            setTimeout(() => {
              boundActions.add()
            }, 1000)
          }
        }>1秒后加1</button>
      </div>
    )
  }
}

export default Counter
