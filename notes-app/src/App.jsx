import Task from "./components/Task";
import AddTask from './components/AddTask';
import { useState } from "react";
import wolf from './assets/bg-image.webp';
const App = () => {
   const [data, setdata] = useState([]) 
  
  return (

    <div className='bg-black text-white h-full p-5  bg-cover  '    style={{ backgroundImage: `url(${wolf})` }} >
      <div className="heading flex justify-center  "><h1 className="text-3xl font-bold  ">Notes Vault</h1></div>
      <div className="main p-10  flex gap-5 h-full ">
        <AddTask data={data} setdata={setdata} />
        
       <div className="rightSide w-3/5  px-10 min-h-full flex flex-wrap items-start gap-3 overflow-y-auto">
  {data.length === 0 ? (
    <h2 className="w-full py-40 text-center text-4xl font-bold text-white 
                   animate-pulse 
                   drop-shadow-[0_0_10px_rgba(139,92,246,0.9)] 
                   hover:drop-shadow-[0_0_20px_rgba(139,92,246,1)] 
                   transition-shadow">
      NO TASK FOUND 
    </h2>
  ) : (
    data.map((elem, idx) => (
      <Task 
        key={idx} 
        idx={idx} 
        title={elem.title} 
        detail={elem.detail} 
        data={data} 
        setdata={setdata} 
      />
    ))
  )}
</div>

      </div>
    </div>
  )
}

export default App
