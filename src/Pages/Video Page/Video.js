import React from 'react'
import Videopage from './Videopage'
import './video.css'
import Recommended from './Recommended'
const Video = ({menu,setmenu}) => {
  return (
    <div className='videopage_container'>
       <Videopage />
       <Recommended />

    </div>
  )
}

export default Video