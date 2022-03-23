import React from 'react'
import './Rightfb.css'

const Right = ({data}) => {
  return (
    <div className='rightpart'>
          {
           data.map((item)=>(
               <div key={item.id} className='right1'>
                   <div className='rightimage'>
                   <img src={item.image} alt={item.name}/>
                   </div>
                   <div className='rightname'>{item.name}</div>
                  
               </div>
           ))
       }
    </div>
  )
}

export default Right