import React from 'react'
import './Rvideos.css'
import { Link } from 'react-router-dom'

import {Like_converter } from './data'
import moment from 'moment'
import { useContext } from 'react'
import { AppContext } from './App'
const Rvideos = () => {
  const { menu, category,setcategory,data } = useContext(AppContext);

  return (
    <div className='Rvideos'>
      <div className='top_category'>
        <h4 className={`tcategory ${category === 0 ? "selected" : ""}`} onClick={() => setcategory(0)}>All</h4>
        <h4 className={`tcategory ${category === 10 ? "selected" : ""}`} onClick={() => setcategory(10)}>Music</h4>
        <h4 className={`tcategory ${category === 17 ? "selected" : ""}`} onClick={() => setcategory(17)}>Sports</h4>
        <h4 className={`tcategory ${category === 20 ? "selected" : ""}`} onClick={() => setcategory(20)}>Gaming</h4>
        <h4 className={`tcategory ${category === 23 ? "selected" : ""}`} onClick={() => setcategory(23)}>Comedy</h4>
        <h4 className={`tcategory ${category === 24 ? "selected" : ""}`} onClick={() => setcategory(24)}>Entertainment</h4>
        <h4 className={`tcategory ${category === 25 ? "selected" : ""}`} onClick={() => setcategory(25)}>News</h4>
        <h4 className={`tcategory ${category === 1 ? "selected" : ""}`} onClick={() => setcategory(1)}>Movies</h4>
        <h4 className={`tcategory ${category === 28 ? "selected" : ""}`} onClick={() => setcategory(28)}>Technology</h4>
        <h4 className={`tcategory ${category === 22 ? "selected" : ""}`} onClick={() => setcategory(22)}>Blog</h4>
        <h4 className={`tcategory ${category === 2 ? "selected" : ""}`} onClick={() => setcategory(2)}>Automobiles</h4>
      </div>
      <div className={`feed ${menu === "true" ? "" : "larger"}`}>
        {data.map((item, index) => {
          return (
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
              <img src={item.snippet.thumbnails.medium.url} alt="thumbnail"></img>
              <h4>{item.snippet.title}</h4>
              <h6>{item.snippet.channelTitle}</h6>
              <h6>{Like_converter(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()}</h6>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Rvideos;