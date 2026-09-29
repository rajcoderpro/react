import {Route, Routes} from 'react-router-dom'
import HomePage from './components/HomePage'
import FinalPage from './Pages/FinalPage'
const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element = {<HomePage/>}></Route>
        <Route path='/final' element = {< FinalPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App