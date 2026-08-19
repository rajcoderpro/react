import React from 'react'
import { Check } from 'lucide-react';
const Card = (props) => {
return (
    <div className="card bg-amber-300 w-[32%] min-w-[32%]  rounded-3xl  px-5 py-7 flex flex-col jb justify-between    bg-cover  "   style={{ backgroundImage: `url(${props.image_url})` }}>
            <div className="index w-10 h-10 rounded-full flex justify-center items-center bg-white">
                {props.index}
            </div>
            <div className="bottomPart flex flex-col gap-6 pb-4">
                <h1 className='text-white text-2xl'>{props.heading}</h1>
                <p className='text-amber-100'>{props.para}</p>
                <button className=' bg-blue-300  rounded-[50px]  text-amber-50 font-semibold text-lg  flex items-start px-7 py-2 justify-between'>{props.tag} <Check className='justify-self-center mt-1' size={22} strokeWidth={5} /></button>
            </div>
    </div>
)
}

export default Card
