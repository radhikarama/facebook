import React from 'react'
import './Leftfb.css'

const Leftfb = ({data}) => {
  return (
    <div className='leftpart'>
       {
           data.map((item)=>(
               <div key={item.id} className='left1'>
                   <div className='leftimage'>
                   <img src={item.image} alt={item.name}/>
                   </div>
                   <div className='leftname'>{item.name}</div>
                  
               </div>
           ))
       }

    </div>
  )
}

export default Leftfb