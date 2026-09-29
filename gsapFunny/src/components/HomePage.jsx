import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import Guitar from './Guitar'
import Heading from '../Heading'
import { Link, Navigate, useNavigate } from 'react-router-dom'


gsap.registerPlugin(useGSAP)

const App = () => {
  const cursorRef = useRef()

  useGSAP(() => {
    // Center the cursor on the mouse
    gsap.set(cursorRef.current, {
      xPercent: -50,
      yPercent: -50,
    })

    // Create smooth quickTo functions
    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.4,
      ease: "power3.out",
    })

    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.4,
      ease: "power3.out",
    })

    // Mouse move handler
    const move = (e) => {
      xTo(e.clientX)
      yTo(e.clientY)
    }

    window.addEventListener("mousemove", move)

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", move)
    }
  })

  const [xValue, setxValue] = useState()
  const [yValue, setyValue] = useState()
  const [zValue, setzValue] = useState()
  const noBtnFunc = () => {
    setxValue(gsap.utils.random(-200 , 200 ,20))
    setyValue(gsap.utils.random(-150 , 150 , 10 ))
    setzValue(gsap.utils.random(-360 , 360 , 30 ))
  } 
  const btnRef = useRef()
  useEffect(()=>{
    gsap.to(btnRef.current ,{
      x : xValue ,
      y : yValue ,
      rotate : zValue ,
      duration : 0.5 ,
      ease : "power4.inOut"

    })
  },[xValue , yValue])


  return (
    <div className="h-screen pt-20 w-full bg-black overflow-hidden flex justify-start items-center flex-col">
      <div
        ref={cursorRef}
        className="absolute top-0 left-0 h-4 w-4 bg-[aqua] rounded-full pointer-events-none z-50"
      ></div>
      <Heading />
      
      <Guitar />
      <div className="buttons flex justify-between gap-20 ">
        <Link to={'/final'}  className='px-15 py-4 rounded bg-[aqua] text-black text-2xl active:scale-95 font-medium' >Yes</Link>
        <button ref={btnRef} onMouseEnter={noBtnFunc} className='px-15 py-4 rounded bg-[aqua] text-black text-2xl font-medium '>No</button>
      </div>

    </div>
  )
}

export default App