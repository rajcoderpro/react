import { useDispatch, useSelector } from 'react-redux'
import { decrement, increaseByfive, increment } from './redux/features/counterSlice'
import { useState } from 'react'

const App = () => {
  const dispatch = useDispatch() 
  const [num, setnum] = useState(0)
  const count = useSelector((state) => state.counter.value)
  return (
    <div id='mainDiv'>
      <h1>{count}</h1>
      <div>
      <button onClick={()=>{dispatch(increment())}}>increase</button>
      <button onClick={()=>{dispatch(decrement())}}>decrease</button>

      </div>
      <input type="number"  value = {num} onChange={(e)=>{setnum(e.target.value)}}  placeholder='set the num' />
      <button onClick={()=>{dispatch(increaseByfive(Number(num)))}}>Increase By Num</button>
    </div>
  )
} 

export default App