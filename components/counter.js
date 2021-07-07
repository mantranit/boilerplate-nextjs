import { useSelector, useDispatch } from 'react-redux'

import { types } from '../redux/dashboard/action'

const Counter = () => {
  const count = useSelector((state) => state.dashboard.count)
  const dispatch = useDispatch()

  return (
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={() => dispatch({ type: types.INCREMENT })}>+1</button>
      <button onClick={() => dispatch({ type: types.DECREMENT })}>-1</button>
      <button onClick={() => dispatch({ type: types.RESET })}>Reset</button>
    </div>
  )
}

export default Counter
