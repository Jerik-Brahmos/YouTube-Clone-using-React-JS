import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from "react-router-dom";
import { useContext } from 'react'
import { AppContext } from './App'
export const Header = () => {
    const { menu, setmenu } = useContext(AppContext);

    return (
        <div className='header'>
            <div className="header_left">
                <MenuIcon onClick={() => setmenu(menu === "false" ? "true" : "false")} className='menuicon icon' />
                <Link to='/' ><img className="header_logo icon" src="./logoy.png" alt="logo"></img></Link>
            </div>
            <div className='header_mid'>
                <input type="text" className='searchbox' placeholder='Search'></input>
                <div className='searchiconbox'>
                    <SearchIcon className='searchicon icon' />
                </div>
            </div>
            <div className="header_right">
                <VideoCallIcon className='videoicon icon' />
                <NotificationsIcon className='notiicon icon' />
                <img className="avatar icon" src="./jerik.jpg" alt=""></img>
            </div>

        </div>
    )
}
export default Header;