import React from 'react'
import './Statuspart.css'
import {FaVideo,FaPhotoVideo,FaLaugh,FaPlus} from 'react-icons/fa'


const Statuspart = ({data}) => {
  return (
    <div className='container'>
    <div className='partitems'>
    <div className='p1p2'>
       {/* part1 */}
            <div className='part1'>
    <div className='image'>
        <span className='part1image'>
<img src='Assests/middlepart/image5.jpg'/></span>
</div>
<div className='partinput'><input type='text' placeholder='Whats on your mind'/></div>
    
        </div>
      
        {/* part2 */}
        
     <div className='part2'>
     
     <div className='iconsp'>
         <span className='items'>
     <FaVideo className='videoicon'/>
     <p>Live Video</p>
     </span>
     <span className='items'><FaPhotoVideo className='photoicon'/>
     <p>Photo/Video</p></span>
     <span className='items'><FaLaugh className='smileicon'/>
     <p>Feeling/Activity</p></span></div>
        </div> 
        </div>
     
     {/* part3 */}
     <div className='second'>
     <div className='part3'>
       <div className='part31'>
     <span className='item1'>
     <FaVideo className='videoicon1'/>
     <p>Rooms - Video chat with friends</p>
     
     </span></div>
     <div className='part311'>
       <button>Create Room</button>
       </div>
       </div>
     <div className='part32'>
     <FaPlus className='plusicon'/>
     { data.map((item)=>(
        <div className='friends'>
          <div className='fimages'>
          <img src={item.image}/>
          
          </div>

        </div>
      ))}
      </div>
      </div>
     </div>  
     </div>
  )
}

export default Statuspart