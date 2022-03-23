import React from 'react'
import './Newspart.css'

const Newspart = ({data}) => {
   
  return (
    <div className='news'>
         {
            data.map((item)=>(
          <div className='newsitems'>
                   <div className='newsh'>
                <div className='news-image'> <img src={item.image}/> </div>
               <div className='newstext'>
                    {item.text}</div>
              </div>
                    <div className='videoplayer'>
     <video width='700' height='250' controls>
       <source src= {item.videopath} type='video/mp4'/>
     </video>

      </div>
                 </div>
                    
            ))}
           
    
    
    </div>
  )
}

export default Newspart