import React from 'react'
import {FaFacebook,FaSearch,FaRegFlag,FaVideo,
  FaPlus,FaCaretDown,FaBell,FaUsers,FaGamepad} from 'react-icons/fa'
import {HiHome} from 'react-icons/hi';
import {RiFlag2Line} from 'react-icons/ri'
import './Header.css';

const Header = () => {
  return (
    <div className='header '>
      {/* leftheader */}
        <div className='leftheader '>
   <div className='leftlogo'> <FaFacebook className='flogo'/> </div>
  <div className='leftsearch'> 
  <input type='text' placeholder='search' className='sbar' />
  < FaSearch className='hsicon'/>
  </div>
        </div> {/*End leftheader */}

         {/* middleheader */}
<div className='middleheader'>
      <span className='notifyicon'>
  <HiHome className='hicon'/>
  <span className='notify'>20</span></span>
  <span className='notifyicon'>
  <FaRegFlag className='hicon'/>
<span className='notify'>20</span></span>
<span className='notifyicon'>
<FaVideo className='hicon'/>
<span className='notify'>20</span></span>
<span className='notifyicon'>
<FaUsers className='hicon'/>
<span className='notify'>20</span></span>
<span className='notifyicon'>
<FaGamepad className='hicon'/>
<span className='notify'>20</span>
</span>
</div> {/*end middleheader */}
    {/* rightheader */}
    <div className='rightheader'>
    <span className='lasticons'>
    <FaPlus/>
    </span>
    <span className='lasticons'>
  <FaBell />
    </span>
    <span className='lasticons'>
    <FaCaretDown/>
    </span></div>
     {/* end-rightheader */}
    
      {/*end-class */} </div>  
 
  )
}

export default Header