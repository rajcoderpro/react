import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const Heading = () => {
  const headRef = useRef()
  
  useGSAP(()=>{
    const text = headRef.current.innerText
    const splittedText = text.split("")
    let halfSize = Math.floor(splittedText.length/2)
    let temp = "" 
    splittedText.forEach((elem , idx) => {
      const char = elem === " " ? "&nbsp;" : elem
      if(idx < halfSize ){
        temp += `<span class="a">${char}</span>`
      }else {
        temp += `<span class="b">${char}</span>`
      }
    });
    headRef.current.innerHTML = temp

    gsap.set("h1 span", {
      display: "inline-block",
    })


    gsap.from('h1 .a' ,{
      y : 30,
      duration : 0.5,
      opacity:0,
      stagger:0.25,
      ease: "power1.inOut",
    })
    gsap.from('h1 .b' ,{
      y : -30,
      duration : 0.5,
      opacity:0,
      stagger: -0.25,
      ease: "power1.inOut",
    })
  } ,[])
  return (
    <div>
        <h1 ref={headRef} className='text-7xl  px-10 py-10 text-[aqua] font-semibold  '>Do you have crush on me ? </h1>
    </div>
  )
}

export default Heading