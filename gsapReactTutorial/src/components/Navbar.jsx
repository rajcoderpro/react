import { Astroid} from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const Navbar = ({timeline}) => {
  const headingRef = useRef() 
  const tagsRef = useRef() 
  const btnRef = useRef() 
  const navRef = useRef() 
  useGSAP(()=>{
      let tl = timeline
      tl.from(headingRef.current  , {
      y : -30 ,
      opacity : 0 ,
      duration : 0.5 ,
      delay : 0.5 ,

    })

    tl.from('.taggs h4 , .taggs button '  , {
      y : -30 ,
      opacity : 0 ,
      duration : 0.4 ,
      stagger:0.2
    })
    
  },{scope : navRef})
  return (
    <div ref={navRef} className='flex justify-between px-15 py-6'>
        <span ref={headingRef} className="wizard font-medium text-3xl flex gap-3  "><span className="inline-block rotate-45" ><Astroid size={50} strokeWidth={2} /></span ><span className="mt-2 font-bold">  WizardZ</span></span>
        <div ref={tagsRef} className=" taggs flex justify-between gap-6">
            <h4  className='font-medium text-lg mt-2'>About us</h4>
            <h4  className='font-medium text-lg mt-2'>Services</h4>
            <h4  className='font-medium text-lg mt-2'>Use cases</h4>
            <h4  className='font-medium text-lg mt-2'>Pricing</h4>
            <h4  className='font-medium text-lg mt-2'>Blog</h4>
            <button ref={btnRef} className=' cursor-pointer  active:scale-95 px-7 ml-3 py-3 bg-transparent bottom-3 border font-medium text-sm rounded-lg'>Request a quote</button>
        </div>
    </div>
  )
}

export default Navbar