import React, { useEffect, useState } from 'react'
import './Videopage.css';
import Axios from 'axios';
import v1 from '../../assests/video1.mp4'
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import channel_logo from '../../assests/emc_logo.jpg'
import person_pic from '../../assests/jerik.jpg'
import { API_KEY } from '../../data'
import { Like_converter } from '../../data';
import moment from 'moment'
import { useParams } from 'react-router-dom'
const Videopage = () => {
    const {categoryId,videoId}=useParams();
    //API - video info
    const [videoinfo, setvideoinfo] = useState([null])
    const [channelinfo, setchannelinfo] = useState(null)
    const [commentinfo, setcommentinfo] = useState(null)
    const fetchvideoinfo = async () => {
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(url).then(res => res.json()).then(data => setvideoinfo(data.items[0]))

    }

    const fetchchannelinfo = async () => {
        try {
            const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoinfo?.snippet?.channelId}&key=${API_KEY}`;
            await fetch(url).then(res => res.json()).then(data => setchannelinfo(data.items[0]))
            const c_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
            await fetch(c_url).then(res => res.json()).then(data => setcommentinfo(data.items))

        }

        catch (error) {
            console.log("Loading");
        }
    }
    useEffect(() => {
        fetchvideoinfo()
    }, [videoId])

    useEffect(() => {
        if (videoinfo) {
            fetchchannelinfo()
        }
    }, [videoinfo])



    return (
        <div className='playvideo'>
            <div className='video'>
                {/*    <video src={v1} autoplay controls muted></video> */}
                <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <h2 className='title'>{videoinfo ? videoinfo.snippet?.title : "Title Here"}</h2>
                <div className='channel_profile'>
                    <div className='channel_info'>
                        <img src={channelinfo?.snippet?.thumbnails?.default.url} alt="Profile Pic"></img>
                        <div className='profile_subscount'>
                            <h4 className='channel_name'>{videoinfo?.snippet?.channelTitle}</h4>
                            <h6 className='subs_count'>{channelinfo ? Like_converter(channelinfo?.statistics?.subscriberCount) : "K"} subscribers</h6>
                        </div>
                        <button className='subscribe'>Subscribe</button>
                    </div>

                    <div className='icons'>
                        <button className='icon_button button'>
                            <ThumbUpAltOutlinedIcon className='icon' /><h6>{videoinfo ? Like_converter(videoinfo?.statistics?.likeCount) : "K"}</h6>
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
                            <h6>{videoinfo ? Like_converter(videoinfo?.statistics?.viewCount) : ""} &bull; {moment(videoinfo?.snippet?.publishedAt).fromNow()}</h6>

                        </div>
                        <h6 className='description_data'>{videoinfo ? Like_converter(videoinfo?.snippet?.description) : ""}</h6>
                    </div>
                </div>
                <div className='comments'>
                    <h4>{videoinfo ? Like_converter(videoinfo?.statistics?.commentCount) : ""} Comments</h4>
                    {commentinfo?.map((item,index) => {
                        return (
                            <div key={index} className='comments_info'>
                                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="person pic"></img>
                                <div className='comment_data'>
                                    <div className='comment_head'>
                                        <h5>{item.snippet.topLevelComment.snippet.authorDisplayName}</h5>
                                        <h6>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</h6>
                                    </div>
                                    <h6>{item.snippet.topLevelComment.snippet.textDisplay}</h6>
                                    <div className='comment_like'>
                                        <ThumbUpAltOutlinedIcon className='like' />
                                        <h6>{Like_converter(item.snippet.topLevelComment.snippet.likeCount)}</h6>
                                        <ThumbDownAltOutlinedIcon className='dislike' />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Videopage