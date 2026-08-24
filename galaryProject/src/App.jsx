import { useState } from "react"

const App = () => {
  const [x, setx] = useState(1)
  const increaseTheValue = () =>{
    console.log("xxx");
    setx( x + 1 )
  }
  const decreaseTheValue = () =>{
    console.log("yyy");
    setx( x - 1 )
    
  }
  const jumpBy5 = () =>{
    console.log("yyy");
    setx( x+5 )
    
  }
  return (
    <div className="App  bg-black text-white h-screen flex flex-col justify-center items-center gap-5">
        <div className="data text-3xl bg-white text-black rounded-xl px-10 py-7 " >{x}</div>
        <div className="buttons flex gap-10 ">
        <button 
  onClick={increaseTheValue} 
  className="bg-[aqua] text-white text-xl px-5 py-3 rounded-4xl active:scale-95 cursor-pointer 
             hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.7)] transition-shadow duration-300">
  Increase
</button>
        <button 
  onClick={decreaseTheValue} 
  className="bg-[aqua] text-white text-xl px-5 py-3 rounded-4xl active:scale-95 cursor-pointer 
             hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.7)] transition-shadow duration-300">
  Decrease
</button>
        <button 
  onClick={jumpBy5} 
  className="bg-[aqua] text-white text-xl px-5 py-3 rounded-4xl active:scale-95 cursor-pointer 
             hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.7)] transition-shadow duration-300">
  Jump By 5
</button>

       
    </div></div>
  )
}

export default App