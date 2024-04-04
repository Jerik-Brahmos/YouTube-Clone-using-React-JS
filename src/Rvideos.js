import React from 'react'
import './Rvideos.css'
import tb1 from './assests/emc_html_thumbnail.jpeg'
import {Link} from 'react-router-dom'
const Rvideos = ({menu, category, setcategory}) => {
  return (
    <div className='Rvideos'>
      <div className='top_category'>
        <h4 className={`tcategory ${category === 0 ? "selected" : ""}`} onClick={()=>setcategory(0)}>All</h4>
        <h4 className={`tcategory ${category === 10 ? "selected" : ""}`} onClick={()=>setcategory(10)}>Music</h4>
        <h4 className={`tcategory ${category === 17 ? "selected" : ""}`}  onClick={()=>setcategory(17)}>Sports</h4>
        <h4 className={`tcategory ${category === 34 ? "selected" : ""}`}  onClick={()=>setcategory(34)}>Gaming</h4>
        <h4 className={`tcategory ${category === 23 ? "selected" : ""}`}  onClick={()=>setcategory(23)}>Comedy</h4>
        <h4 className={`tcategory ${category === 24 ? "selected" : ""}`}  onClick={()=>setcategory(24)}>Entertainment</h4>
        <h4 className={`tcategory ${category === 25 ? "selected" : ""}`}  onClick={()=>setcategory(25)}>News</h4>
        <h4 className={`tcategory ${category === 30 ? "selected" : ""}`}  onClick={()=>setcategory(30)}>Movies</h4>
        <h4 className={`tcategory ${category === 28 ? "selected" : ""}`}  onClick={()=>setcategory(28)}>Technology</h4>
        <h4 className={`tcategory ${category === 31 ? "selected" : ""}`}  onClick={()=>setcategory(31)}>Anime</h4>
        <h4 className={`tcategory ${category === 27 ? "selected" : ""}`}  onClick={()=>setcategory(27)}>Education</h4>
        <h4 className={`tcategory ${category === 44 ? "selected" : ""}`}  onClick={()=>setcategory(44)}>Trailers</h4>
        <h4 className={`tcategory ${category === 42 ? "selected" : ""}`}  onClick={()=>setcategory(42)}>Shorts</h4>
      </div>
      <div className={`feed ${menu==="true"?"":"larger"}`}>
        <Link to={`video/20/4521`} className='card'>
          <img src={tb1} alt="thumbnail"></img>
          <h4>Mastering HTML Basics and Beyond | Your Ultimate Guide to Begin Web Development in Tamil</h4>
          <h6>Error Makes Clever</h6>
          <h6>859K views &bull; 7 months ago</h6>
        </Link>
        <div className='card'>
          <img src={tb1} alt="thumbnail"></img>
          <h4>Mastering HTML Basics and Beyond | Your Ultimate Guide to Begin Web Development in Tamil</h4>
          <h6>Error Makes Clever</h6>
          <h6>859K views &bull; 7 months ago</h6>
        </div>
        <div className='card'>
          <img src={tb1} alt="thumbnail"></img>
          <h4>Mastering HTML Basics and Beyond | Your Ultimate Guide to Begin Web Development in Tamil</h4>
          <h6>Error Makes Clever</h6>
          <h6>859K views &bull; 7 months ago</h6>
        </div>
        <div className='card'>
          <img src={tb1} alt="thumbnail"></img>
          <h4>Mastering HTML Basics and Beyond | Your Ultimate Guide to Begin Web Development in Tamil</h4>
          <h6>Error Makes Clever</h6>
          <h6>859K views &bull; 7 months ago</h6>
        </div>
        <div className='card'>
          <img src={tb1} alt="thumbnail"></img>
          <h4>Mastering HTML Basics and Beyond | Your Ultimate Guide to Begin Web Development in Tamil</h4>
          <h6>Error Makes Clever</h6>
          <h6>859K views &bull; 7 months ago</h6>
        </div>
        <div className='card'>
          <img src={tb1} alt="thumbnail"></img>
          <h4>Mastering HTML Basics and Beyond | Your Ultimate Guide to Begin Web Development in Tamil</h4>
          <h6>Error Makes Clever</h6>
          <h6>859K views &bull; 7 months ago</h6>
        </div>
        <div className='card'>
          <img src={tb1} alt="thumbnail"></img>
          <h4>Mastering HTML Basics and Beyond | Your Ultimate Guide to Begin Web Development in Tamil</h4>
          <h6>Error Makes Clever</h6>
          <h6>859K views &bull; 7 months ago</h6>
        </div>
        <div className='card'>
          <img src={tb1} alt="thumbnail"></img>
          <h4>Mastering HTML Basics and Beyond | Your Ultimate Guide to Begin Web Development in Tamil</h4>
          <h6>Error Makes Clever</h6>
          <h6>859K views &bull; 7 months ago</h6>
        </div>
        <div className='card'>
          <img src={tb1} alt="thumbnail"></img>
          <h4>Mastering HTML Basics and Beyond | Your Ultimate Guide to Begin Web Development in Tamil</h4>
          <h6>Error Makes Clever</h6>
          <h6>859K views &bull; 7 months ago</h6>
        </div>
      </div>
    </div>
  )
}

export default Rvideos;