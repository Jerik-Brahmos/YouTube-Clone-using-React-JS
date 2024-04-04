import React, { useState } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar/Sidebar'
import Rvideos from '../Rvideos'
import './Home.css'

const Home = ({menu,setmenu}) => {

   const[category,setcategory]=useState(0)

    return (
        <div className='Home'>
            
            <div className='main'>
                <Sidebar menu={menu} setmenu={setmenu} category={category} setcategory={setcategory} />
                <Rvideos category={category} setcategory={setcategory} />
            </div>
        </div>
    )
}

export default Home