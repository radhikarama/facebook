import React from 'react'
import './Updatepart.css'

const Updatepart = ({data}) => {
  return (
    <div className='Container'>
    <div className='updates'>
        {
            data.map((item)=>(
                <div key={item.id} className='updatespart'>
                    <div className='roundimage'>
                        <img src={item.image} alt={item.name} className='imagebg'/>
                  <div className='card'>
                    <div className='fullimage'>
                    <img  src={item.image} alt={item.name}/>
                    </div>
                    <div className='name'>{item.name}</div>
                    </div>
                    </div>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default Updatepart