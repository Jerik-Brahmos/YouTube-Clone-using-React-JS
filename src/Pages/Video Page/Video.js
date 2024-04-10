import React from 'react'
import Videopage from './Videopage'
import './video.css'
import Recommended from './Recommended'
import { useParams } from 'react-router-dom'
const Video = () => {
  const {categoryId,videoId}=useParams();
  return (
    <div className='videopage_container'>
       <Videopage />
       <Recommended categoryId={categoryId}/>

    </div>
  )
}

export default Video