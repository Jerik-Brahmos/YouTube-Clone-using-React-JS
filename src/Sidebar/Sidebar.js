import React from 'react'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
export const Sidebar = ({ menu, setmenu, category, setcategory }) => {
  return (
    <div className={`sidebar ${menu === "true" ? "" : "small_sidebar"}`}>
      

      <div className={`Sidebarrow ${category === 0 ? "selected" : ""}`} onClick={() => setcategory(0)}>
        <HomeIcon className="Sidebarrow_icons" />
        <h2 className='Sidebarrow_titles' >Home</h2>
      </div>

      <div className="Sidebarrow" onClick={() => setcategory(0)} >
        <WhatshotIcon className="Sidebarrow_icons" />
        <h2 className='Sidebarrow_titles' >Trending</h2>
      </div>

      <div className="Sidebarrow" onClick={() => setcategory(0)} >
        <SubscriptionsIcon className="Sidebarrow_icons" />
        <h2 className='Sidebarrow_titles' >Subscription</h2>
      </div>

      <hr></hr>

      <div className="Sidebarrow">
        <VideoLibraryIcon className="Sidebarrow_icons" />
        <h2 className='Sidebarrow_titles' >Library</h2>
      </div>

      <div className="Sidebarrow">
        <HistoryIcon className="Sidebarrow_icons" />
        <h2 className='Sidebarrow_titles' >History</h2>
      </div>

      <div className="Sidebarrow">
        <OndemandVideoIcon className="Sidebarrow_icons" />
        <h2 className='Sidebarrow_titles' >Your Videos</h2>
      </div>

      <div className="Sidebarrow">
        <ThumbUpAltIcon className="Sidebarrow_icons" />
        <h2 className='Sidebarrow_titles' >Liked Videos</h2>
      </div>

      <div className="Sidebarrow">
        <ExpandMoreOutlinedIcon className="Sidebarrow_icons" />
        <h2 className='Sidebarrow_titles' >Show more</h2>
      </div>

      <hr />

      <h2 className='subscription_p'>Subscriptions</h2>

      <div className='Subscribed_channel'>
        <img src="./channel_logos/Education_4u_logo.jpeg" alt='' className='img'></img>
        <h2>Education 4u</h2>
      </div>

      <div className='Subscribed_channel'>
        <img src="./channel_logos/vi_siddhu_slogs_logo.jpeg" alt='' className='img'></img>
        <h2>VJ Siddhu Vlogs</h2>
      </div>

      <div className='Subscribed_channel'>
        <img src="./channel_logos/sony_music_logo.png" alt='' className='img'></img>
        <h2>Sony Music</h2>
      </div>

      <div className='Subscribed_channel'>
        <img src="./channel_logos/mr_beast_logo.jpeg" alt='' className='img'></img>
        <h2>Mr.Beast</h2>
      </div>

      <div className='Subscribed_channel'>
        <img src="./channel_logos/freecodecamp_logo.png" alt='' className='img'></img>
        <h2>freecodecamp</h2>
      </div>

      <div className='Subscribed_channel'>
        <img src="./channel_logos/emc_logo.jpg" alt='' className='img'></img>
        <h2>Error Makes Clever</h2>
      </div>
    </div>
  )
}
export default Sidebar;