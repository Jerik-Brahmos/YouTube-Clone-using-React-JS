import React, { useState, useEffect } from 'react'
import { API_KEY } from '../../data'
import './Recommended.css'
import { Like_converter } from '../../data'
import moment from 'moment'
import {Link} from "react-router-dom"
const Recommended = ({ categoryId }) => {
    const[rvideo, setrvideo] = useState([])
    const fetchrvideo = async () => {
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
        await fetch(url).then(res => res.json()).then(data => setrvideo(data.items))

    }
    useEffect(() => {
        fetchrvideo()
    }, [])

    console.log(rvideo);
    return (
        <div className='recommended'>
            {rvideo.map((item, index) => {
                return (
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='r_card'>
                        <img src={item.snippet.thumbnails.medium.url} alt=""></img>
                        <div className='recommended_info'>
                            <h5>{item.snippet.title}</h5>
                            <h6>{item.snippet.channelTitle}</h6>
                            <h6>{Like_converter(item.statistics.viewCount)} &bull; {moment(item?.snippet?.publishedAt).fromNow()}</h6>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Recommended