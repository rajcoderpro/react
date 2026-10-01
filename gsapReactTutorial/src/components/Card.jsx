import {ArrowUpRight} from 'lucide-react'
const Card = (elem) => {
  return (
    <div  className=' card w-[40%]    flex h-50 rounded-2xl border shadow-[0px_20px_10px_black ] pt-3 '>
      <div className="part1  flex flex-col justify-between w-[50%] px-5 py-3">
        <h1 className=' bg-[#9AE975] text-2xl font-medium rounded-lg  px-2 py-2'>{elem.heading}</h1>
        <button className='font-semibold text-xl  flex justify-start gap-3'><span><ArrowUpRight /></span>Learn more</button>
      </div>
      <div className="part2  w-[50%] pl-10">
        <img className="h-full object-cover " src={elem.url} alt="" />
      </div>
    </div>
  )
}

export default Card
