import React from 'react'
import './Videoplayer.css'
import video from '../../assets/students.mp4'
import crossicon from '../../assets/remove.png'
const Videoplayer = ({playVideo,setPlayVideo}) => {
  return (
    <div className={playVideo?"video-player":"hidevideo"}>
        <video src={video} autoPlay muted controls>
        </video>
        <img src={crossicon} alt=""  className='crossicon' onClick={()=>{setPlayVideo(!playVideo)}}/>
      
    </div>
  )
}

export default Videoplayer
