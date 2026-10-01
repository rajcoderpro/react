import React from 'react'
import Card from './Card'

const Cards = () => {
    
    const data = [
        {heading : "Search engine optimization" , url :"https://deluxe.scene7.com/is/image/deluxecorp/bank-operations-profitability-life-event?$deluxe_param$&wid=900"} ,
        {
            heading : "Pay per click advertising" ,
            url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRThFr5cu5P_tKsIFItPRY___k5JOpD-9XXX39e_vkGyA&s"
        },
        {
            heading : "social media marketing",
            url :"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSV4U9z8yy7sAuMBinBKVAL4SZVNVuPe41WOJHH-kJf49FmnfbF"
        },
        {
            heading : "E-mail marketing" ,
            url : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTF16qFXJ7TSRbltO4jXaTLUL1eSaCqaXXJr803qowqn_UJgUbm"
        },
    ]
  return (
    <div className='px-15 flex shrink-0  justify-evenly flex-wrap gap-10 mt-10'>
        {data.map((elem , idx) => {
            return <Card  idx ={idx}  heading = {elem.heading} url= {elem.url} />
        })}
    </div>
  )
}

export default Cards