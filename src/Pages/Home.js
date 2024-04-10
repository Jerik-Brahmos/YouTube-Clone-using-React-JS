import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Rvideos from '../Rvideos'
import './Home.css'
import { useContext } from 'react'
import { AppContext } from '../App'

const Home = () => {
    const { loading, setLoading } = useContext(AppContext);


    return (
        <div className='Home'>
            {loading ? (
                <div className='loading-container'>
                <div className='loading'></div>
            </div>
            
            ) : (
                <div className='main'>
                    <Sidebar />
                    <Rvideos />
                </div>
            )}
        </div>
    )
}

export default Home