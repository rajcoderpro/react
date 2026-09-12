import { useSelector } from "react-redux"
import { ToastContainer } from 'react-toastify';
import {Route, Routes} from 'react-router-dom'
import HomePage from "./pages/HomePage"
import CollectionPage from "./pages/CollectionPage"
import NavBar from "./components/NavBar"
const App =  () => {
  const {loading , error , query} = useSelector((state) => state.search)
  // localStorage.removeItem('collection')
  return (
    <div 
      style={{ height: (loading || error || query == '') ? "100vh" : "100%" }}
    className='h-full w-full bg-[#f1dfa3] text-white'>
      <NavBar />
      <Routes > 
        <Route path="/" element =  { <HomePage /> }  />
        <Route path="/collection" element =  { <CollectionPage /> }  />
      </Routes>
     <ToastContainer />
    </div>
  )
}

export default App