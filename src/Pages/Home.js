import React,{useState,useEffect} from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar/Sidebar'
import Rvideos from '../Rvideos'
import './Home.css'


const Home = ({menu,setmenu,category,setcategory,data,setdata}) => {


 
    return (
        <div className='Home'>
            
            <div className='main'>
                <Sidebar menu={menu} setmenu={setmenu} category={category} setcategory={setcategory} />
                <Rvideos menu={menu}  category={category} setcategory={setcategory}  data={data} setdata={setdata}/>
            </div>
        </div>
    )
}

export default Home