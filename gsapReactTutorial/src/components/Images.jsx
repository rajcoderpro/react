import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);
import { useRef } from 'react';
const Images = () => {
  const mainRef=useRef()
  useGSAP(()=>{
    gsap.from(".main img" ,{
      y : 50 ,
      opacity :0 ,
      duration : 0.3 ,
      stagger : 0.3 ,
      scrollTrigger :{
        scroller : "body" ,
        start : "top 75%" ,
        trigger : mainRef.current ,
      }
    })
  } )
  return (  
        <div ref={mainRef} className=' main images px-15 flex justify-between mt-10 '>
            <img src="https://imgs.search.brave.com/PNFmzzZmYq_XCQCtdgfsH-ozxEx0ed_ijHFJSp28WAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy9i/bGFjay1vZmZpY2lh/bC1hbWF6b24tbG9n/by03MDE3NTE2OTQ3/OTE5NjJzc2thZGFt/Z2lnLnBuZw" alt="" />
            <img src="https://imgs.search.brave.com/AuPqDU2j99XIE0wqNVUUnLv195xSf0LT8wwQvtrIcDw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAz/L0RyaWJiYmxlLUxv/Z28tMjAwOS01MDB4/MjgxLnBuZw" alt="" />
            <img src="https://imgs.search.brave.com/c5586L0GUrP5k7YB2rhw7fU9Qv9pyf0rdA_f_QxBCQw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQ1LzIvaHVic3Bv/dC1sb2dvLXBuZ19z/ZWVrbG9nby00NTEz/NDQucG5n" alt="" />
            <img src="https://imgs.search.brave.com/dPmM_s-nlJw5blzKEQBkYkj5_S3wnIizecDHEwwKYhY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzA3/L05vdGlvbi1FbWJs/ZW0tNTAweDI4MS5w/bmc" alt="" />
            <img src="https://imgs.search.brave.com/g6NxvsH-pJKKk6jX_LaKVHTk_wLQbwGC9HoQNK2Un8w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2JsYWNrLW5ldGZs/aXgtbG9nby1wbmct/NC5wbmc" alt="" />
            <img src="https://imgs.search.brave.com/BIfb_mfx-jV5w0DqIZkiMuz8t0E2Lp9cBM3W8Be4t8w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzI2Lzg4Lzc5/LzM2MF9GXzgyNjg4/Nzk0NV9xQXJScDlU/dmZscER6VWx2aGwx/WFdoeHhjOThvZlVj/MS5qcGc" alt="" />

        </div>


   
  )
}

export default Images