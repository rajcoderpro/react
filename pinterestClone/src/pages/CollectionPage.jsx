import { useDispatch, useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"
import { clearCollection } from "../redux/features/collectionSlice"

const CollectionPage = () => {
    const collection = useSelector((state) => state.collection.items)
    const dispatch = useDispatch()
  return (
    
    <div className="px-5 py-6 flex flex-wrap gap-6  w-full h-full overflow-auto bg-[#F3EEC3]" >
        <div className="flex h-[10%] px-0 py-3 justify-between w-full ">
            <h1 className="text-2xl font-medium text-center text-black " >Your Collection </h1>
            <button 
            onClick={() => {
                dispatch(clearCollection())
            }}
            className='px-3 py-2 cursor-pointer active:scale-95 rounded bg-red-400 text-sm font-light'>Clear collection </button>
        </div>
        {collection.map((elem , idx) =>{
            return <div key={idx} >
                    <CollectionCard data={elem}/>
                 </div>
        })}
    </div>
  )
}

export default CollectionPage