import React from 'react'

import Main from './sec1components/Main';
import Arrow from './sec1components/Arrow';
const Left = () => {
return (
    <div className="left flex  flex-col justify-between w-[30%]  px-5 py-10 ">
            <Main/>
            <Arrow />
        </div>
)
}

export default Left
