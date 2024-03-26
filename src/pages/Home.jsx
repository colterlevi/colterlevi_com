import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'


const Home = () => {

    return (
        <>
        <h1>Colter Longshore</h1>
        <Navbar />
        <div>
                <Outlet />   
        </div>
        </>
    )
}

export default Home
