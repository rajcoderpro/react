import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className=' flex justify-between bg-[#F7E3AF] px-5 py-3 '>
            <Link to='/' className='text-2xl text-black self-center'>Media Search </Link>
            <div className='flex gap-5 '>
                <Link  to='/'  className='bg-white text-[black] px-3 py-2 rounded text-base font-medium  active:scale-95'>Search </Link>
                <Link to='/collection' className='bg-white text-[black] px-3 py-2 rounded text-base font-medium  active:scale-95'>Collection </Link>
            </div>
        </div>
  )
}

export default NavBar