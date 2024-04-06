import React, { useState, useEffect } from 'react'
import './search.css'
import { Like_converter } from './data';
import moment from 'moment'
import { useParams } from 'react-router-dom';
import {Link} from "react-router-dom";
const Search = ({ searchQuery, setSearchQuery }) => {




    return (
        <div className='search'>
            {searchQuery.map((item, index) => {
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='search_res'>
                    <img src={item.snippet.thumbnails.medium.url} alt=""></img>
                    <div className='r_search'>
                        <h5>{item.snippet.title}</h5>
                        <h6>{item.snippet.channelTitle}</h6>
                        <h6>{Like_converter(item.statistics.viewCount)} &bull; {moment(item?.snippet?.publishedAt).fromNow()}</h6>
                    </div>
                </Link>
            })}
        </div>
    )
}

export default Search