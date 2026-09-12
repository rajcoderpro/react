import { useDispatch } from "react-redux"
import { addCollection, addedToast } from "../redux/features/collectionSlice"

const ResultCard = ( {data}) => {
  const dispatch = useDispatch()
  const saveBtn = (elem) =>{
    dispatch(addCollection(elem))
    dispatch(addedToast())
  }

  if(data.type == 'gif') console.log(data.hrefUrl)
  return (
    <div className='h-80  w-[16vw] relative bg-white rounded-xl overflow-hidden '>
      <div className = 'h-full '>
        <a href={data.hrefUrl}>
          {data.type == 'photo' ? <img  className='object-cover object-center h-full w-full'  src={data.src} alt="" /> : '' }
          {data.type == 'video' ? <video  className='object-cover object-center h-full w-full' autoPlay muted  src={data.src}></video> : '' }
          {data.type == 'gif' ? <img className='object-cover object-center h-full w-full'   src={data.src} alt='' /> : '' }
          </a>
      </div>
        <div id='bottom' className='text-white h-[35%] flex justify-between items-center w-full gap-3 px-6 py-10  absolute bottom-0  '>
          <h2 className='text-[12px] font-semibold capitalize overflow-hidden '>{data.title }</h2>
          <button onClick={() => {saveBtn(data)}} className='px-3 py-2 cursor-pointer active:scale-95 rounded bg-indigo-600 text-sm font-semibold'>Save</button>
        </div>


    </div>
  )
}

export default ResultCard