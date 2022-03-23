import React from 'react'
import '../../App.css'
import Newspart from './Newspart'
import Statuspart from './Statuspart'
import Updatepart from './Updatepart'

const Middlefb = ({data1,data2,data3}) => {
  return (
    <div className='middle'>
         <Updatepart data={data1}/>
        <Statuspart data={data2}/>
        <Newspart data={data3}/>
    </div>
  )
}

export default Middlefb