import gsap from 'gsap'
import Cards from './components/Cards'
import Center from './components/Center'
import Images from './components/Images'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'

const App = () => {
    const tl = gsap.timeline()
  return (
    <div className=' '>
      <Cursor />
      <Navbar timeline = {tl}/>
      <Center timeline = {tl}/>
      <Images/>
      <Cards />
    </div>
  )
}

export default App