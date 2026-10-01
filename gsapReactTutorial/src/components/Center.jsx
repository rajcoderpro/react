import { useRef } from "react";
import { useGSAP } from "@gsap/react";
const Center = ({timeline}) => {
  const h1Ref = useRef() 
  const pRef = useRef() 
  const imgRef = useRef() 
  const btnRef = useRef() 
  useGSAP(()=>{
    timeline.from(h1Ref.current ,{
      x : -200 ,
      opacity : 0,
      duration:0.6
    })
    timeline.from(pRef.current ,{
      x:-100 ,
      opacity :0, 
      duration : 0.4
    })
    timeline.from(btnRef.current ,{
      opacity :0, 
      duration : 0.4,
    })
    timeline.from(imgRef.current ,{
      opacity :0, 
      duration : 0.4,
    })
  } ,"-=0.5")
  return (
    <div className='px-15 flex justify-between mt-10'>
        <div className="left  w-[44%] flex gap-5 flex-col ">
            <h1 ref={h1Ref} className='text-6xl font-mono font-semilight  '>Navigating the digital landscape for success</h1>
            <p ref={pRef} className='font-small text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nisi eos ex. Ipsam minima suscipit, praesentium natus expedita consectetur! Excepturi quia perferendis consequatur, consectetur beatae unde inventore quidem expedita hic!</p>
            <button ref={btnRef} className=' cursor-pointer active:scale-95 px-7 py-3 w-fit mt-4 ml-4 rounded-xl font-light text-md bg-black text-white'>Book a consultation </button>
        </div>
        <div ref={imgRef} className="right  w-[56%] flex  flex-col items-end  ">
            <img className='w-[60%] h-[70%] object-cover self-end' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0rsag6nr8yEsD9Pkbo18QIbl5Ub8xGZs0oWeQfL66Q&s" alt="" />
        </div>
    </div>
  )
}

export default Center