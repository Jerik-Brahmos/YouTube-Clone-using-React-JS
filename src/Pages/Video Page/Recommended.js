import React, { useState, useEffect } from 'react';
import { API_KEY } from '../../data';
import './Recommended.css';
import { Like_converter } from '../../data';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Recommended = ({categoryId}) => {

    const [rvideo, setRvideo] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchVideos = async () => {
        try {
            const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;
            const response = await fetch(url);
            const data = await response.json();
            setRvideo(data.items);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching videos:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVideos();
    }, [categoryId]);

    return (
        <div className='recommended'>
            {loading ? (
                <div className='loading-container'>
                <div className='loading'></div>
            </div>
            ) : (
                
                rvideo?.map((item, index) => (
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='r_card'>
                        <img src={item.snippet.thumbnails.medium.url} alt='' />
                        <div className='recommended_info'>
                            <h5>{item.snippet.title}</h5>
                            <h6>{item.snippet.channelTitle}</h6>
                            <h6>{Like_converter(item.statistics.viewCount)} &bull; {moment(item?.snippet?.publishedAt).fromNow()}</h6>
                        </div>
                    </Link>
                ))
            )}
        </div>
    );
};

export default Recommended;
