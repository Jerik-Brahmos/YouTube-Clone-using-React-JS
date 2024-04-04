import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
export const Header = ({menu,setmenu}) => {
    return (
        <div className='header'>
            <div className="header_left">
                <MenuIcon onClick={()=>setmenu(menu==="false"?"true":"false")} className='menuicon icon'/>
                <img className="header_logo icon" src="./logoy.png" alt="logo"></img>
            </div>
            <div className='header_mid'>
                <input type="text" className='searchbox' placeholder='Search'></input>
                <div className='searchiconbox'>
                <SearchIcon className='searchicon icon' />
                </div>
            </div>
            <div className="header_right">
                <VideoCallIcon className='videoicon icon' />
                <NotificationsIcon className='notiicon icon'/>
                <Avatar className="avatar icon" src="./jerik.jpg" alt="" />
            </div>

        </div>
    )
}
export default Header;