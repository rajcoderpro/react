import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {
    const [text, settext] = useState('')
    const dispatch = useDispatch()
  return (
    <div>
        <form  onSubmit={(e) => {
            e.preventDefault() 
            dispatch(setQuery(text))
            settext('')
            
        }} className='flex justify-between px-5  py-2 h-20 bg-[#F3EEC3] '>
            <input value= {text}  onChange={(e) => settext(e.target.value)} className='text-2xl px-5  py-3 w-[55%] font-medium outline-none text-black  rounded border  ' type="text" placeholder='search here ...' />
            <button className='px-15 py-3 text-[#463d3d] text-2xl bg-[#ebe59a] cursor-pointer active:scale-95 rounded hover:bg-[#fdc2ba]'
            >Search</button>
        </form>
    </div>
  )
}

export default SearchBar