import { Component } from 'react'
import { createStore } from './redux'

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

let initState = { number: 0 }

const store = createStore(reducer, initState)

class Counter extends Component {
  public unsubscribe: any
  public state: any
  constructor(props: any) {
    super(props)
    this.state = { number: 0 }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState({ number: store.getState().number }))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={() => store.dispatch({ type: 'ADD' })}>+</button>
        <button onClick={() => store.dispatch({ type: 'MINUS' })}>-</button>
        <button onClick={
          () => {
            setTimeout(() => {
              store.dispatch({ type: 'ADD' })
            }, 1000)
          }
        }>1秒后加1</button>
      </div>
    )
  }
}

export default Counter