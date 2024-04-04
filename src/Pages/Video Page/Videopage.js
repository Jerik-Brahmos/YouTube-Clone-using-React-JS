import React from 'react'
import './Videopage.css';
import v1 from '../../assests/video1.mp4'
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import channel_logo from '../../assests/emc_logo.jpg'
import person_pic from '../../assests/jerik.jpg'
const Videopage = () => {
    return (
        <div className='playvideo'>
            <div className='video'>
                <video src={v1} autoplay controls muted></video>
                <h2 className='title'>Mastering HTML Basics and Beyond | Your Ultimate Guide to Begin Web Development in Tamil</h2>
                <div className='channel_profile'>
                    <div className='channel_info'>
                        <img src={channel_logo} alt="Profile Pic"></img>
                        <div className='profile_subscount'>
                            <h4 className='channel_name'>Error Makes Clever</h4>
                            <h6 className='subs_count'>896k subscribers</h6>
                        </div>
                        <button className='subscribe'>Subscribe</button>
                    </div>

                    <div className='icons'>
                        <button className='icon_button button'>
                            <ThumbUpAltOutlinedIcon className='icon' /><h6>200K</h6>
                        </button>
                        <button className='dislike_b button'>
                            <h6>|</h6>
                            <ThumbDownAltOutlinedIcon className='icon' />
                        </button>
                        <button className='share_b button'>
                            <ReplyOutlinedIcon className='icon share'></ReplyOutlinedIcon><h6>Share</h6>
                        </button>
                        <button className='download_b button'>

                            <GetAppOutlinedIcon className='icon'></GetAppOutlinedIcon><h6>Download</h6>
                        </button>
                    </div>
                </div>
                <div className='description'>
                    <div className='description_info'>
                        <div className='description_head'>
                            <h6>859K views &bull; 7 months ago</h6>
                            <h6 className='description_data_title'>Html Full Course Tutorial fro Beginners 2024 #HTML #EMC</h6>
                        </div>
                        <h6 className='description_data'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, quidem! Voluptatum esse molestias reiciendis nam? Tempore optio odit voluptatem quia!</h6>
                    </div>
                </div>
                <div className='comments'>
                    <h4>569 Comments</h4>
                    <div className='comments_info'>
                        <img src={person_pic} alt="person pic"></img>
                        <div className='comment_data'>
                            <div className='comment_head'>
                                <h5>@jerikbrahmos </h5>
                                <h6>1 month ago</h6>
                            </div>
                            <h6>Thank you sir....Very very greatful for this tutorial.</h6>
                            <div className='comment_like'>
                                <ThumbUpAltOutlinedIcon className='like' />
                                <h6>3</h6>
                                <ThumbDownAltOutlinedIcon className='dislike' />
                            </div>
                        </div>
                    </div>
                    <div className='comments_info'>
                        <img src={person_pic} alt="person pic"></img>
                        <div className='comment_data'>
                            <div className='comment_head'>
                                <h5>@jerikbrahmos </h5>
                                <h6>1 month ago</h6>
                            </div>
                            <h6>Thank you sir....Very very greatful for this tutorial.</h6>
                            <div className='comment_like'>
                                <ThumbUpAltOutlinedIcon className='like' />
                                <h6>3</h6>
                                <ThumbDownAltOutlinedIcon className='dislike' />
                            </div>
                        </div>
                    </div>
                    <div className='comments_info'>
                        <img src={person_pic} alt="person pic"></img>
                        <div className='comment_data'>
                            <div className='comment_head'>
                                <h5>@jerikbrahmos </h5>
                                <h6>1 month ago</h6>
                            </div>
                            <h6>Thank you sir....Very very greatful for this tutorial.</h6>
                            <div className='comment_like'>
                                <ThumbUpAltOutlinedIcon className='like' />
                                <h6>3</h6>
                                <ThumbDownAltOutlinedIcon className='dislike' />
                            </div>
                        </div>
                    </div>
                    <div className='comments_info'>
                        <img src={person_pic} alt="person pic"></img>
                        <div className='comment_data'>
                            <div className='comment_head'>
                                <h5>@jerikbrahmos </h5>
                                <h6>1 month ago</h6>
                            </div>
                            <h6>Thank you sir....Very very greatful for this tutorial.</h6>
                            <div className='comment_like'>
                                <ThumbUpAltOutlinedIcon className='like' />
                                <h6>3</h6>
                                <ThumbDownAltOutlinedIcon className='dislike' />
                            </div>
                        </div>
                    </div>
                    <div className='comments_info'>
                        <img src={person_pic} alt="person pic"></img>
                        <div className='comment_data'>
                            <div className='comment_head'>
                                <h5>@jerikbrahmos </h5>
                                <h6>1 month ago</h6>
                            </div>
                            <h6>Thank you sir....Very very greatful for this tutorial.</h6>
                            <div className='comment_like'>
                                <ThumbUpAltOutlinedIcon className='like' />
                                <h6>3</h6>
                                <ThumbDownAltOutlinedIcon className='dislike' />
                            </div>
                        </div>
                    </div>
                    <div className='comments_info'>
                        <img src={person_pic} alt="person pic"></img>
                        <div className='comment_data'>
                            <div className='comment_head'>
                                <h5>@jerikbrahmos </h5>
                                <h6>1 month ago</h6>
                            </div>
                            <h6>Thank you sir....Very very greatful for this tutorial.</h6>
                            <div className='comment_like'>
                                <ThumbUpAltOutlinedIcon className='like' />
                                <h6>3</h6>
                                <ThumbDownAltOutlinedIcon className='dislike' />
                            </div>
                        </div>
                    </div>
                    <div className='comments_info'>
                        <img src={person_pic} alt="person pic"></img>
                        <div className='comment_data'>
                            <div className='comment_head'>
                                <h5>@jerikbrahmos </h5>
                                <h6>1 month ago</h6>
                            </div>
                            <h6>Thank you sir....Very very greatful for this tutorial.</h6>
                            <div className='comment_like'>
                                <ThumbUpAltOutlinedIcon className='like' />
                                <h6>3</h6>
                                <ThumbDownAltOutlinedIcon className='dislike' />
                            </div>
                        </div>
                    </div>
                    <div className='comments_info'>
                        <img src={person_pic} alt="person pic"></img>
                        <div className='comment_data'>
                            <div className='comment_head'>
                                <h5>@jerikbrahmos </h5>
                                <h6>1 month ago</h6>
                            </div>
                            <h6>Thank you sir....Very very greatful for this tutorial.</h6>
                            <div className='comment_like'>
                                <ThumbUpAltOutlinedIcon className='like' />
                                <h6>3</h6>
                                <ThumbDownAltOutlinedIcon className='dislike' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videopage