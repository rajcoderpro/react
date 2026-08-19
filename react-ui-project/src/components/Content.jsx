import React from 'react'
import Left from './section1/Left'
import Right from './section2/Right'

const Content = () => {
return (
    <div className='flex  gap-5  px-3 py-5 justify-between'>
        <Left />
        <Right />
    </div>
)
}

export default Content
