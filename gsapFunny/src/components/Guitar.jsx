import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import  { useEffect, useRef, useState } from 'react'

const Guitar = () => {
    const [xValue, setxValue] = useState(0)
    const [yValue, setyValue] = useState(0)
    const  finalPath = "M 50 100 Q 750 100 1300 100"
    const svgRef = useRef()
    useEffect(()=>{
        const path = `M 50 100 Q ${xValue}  ${yValue } 1300 100`
        gsap.to("svg path" , {
            attr : {d :path },
            duration:0.5 ,
            ease:"power3.out"
        })
    },[xValue , yValue])
    const move =(e)=>{
        setxValue(e.clientX)
        setyValue(e.clientY)

    }

    const leave = () => {
        gsap.to("svg path" ,{
            attr :{d : finalPath}
        })
    }
  return (
    

    <svg  ref={svgRef} onMouseLeave={leave} onMouseMove={(e)=>move(e)} height="200" width="100%" className=' ' xmlns="http://www.w3.org/2000/svg">
        <path d="M 50 100 Q 750 100 1300 100" stroke="aqua" fill="none" />
    </svg>
  )
}

export default Guitar