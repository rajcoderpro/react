import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs = ['photos' , 'videos' , 'gif']
    const dispatch = useDispatch()
    const activeTab = useSelector((state) => state.search.activeTab)
  return (
    <div className='flex gap-10 p-10 '>
        {tabs.map((elem , idx) => {
            return <button 
            onClick={() => dispatch(setActiveTab(elem))}
            key={idx} className={`px-5 cursor-pointer transition uppercase  py-2 rounded ${activeTab === elem ? 'bg-[#9b79eb]' : 'bg-gray-400'}`}>{elem}</button>
        })}
    </div>
  )
}

export default Tabs