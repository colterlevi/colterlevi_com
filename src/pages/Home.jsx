import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import '../App.css'
import Footer from '../components/footer';


const Home = () => {

    return (
        <>
        <Navbar />
        <div className='main-card'>

        <AnimatePresence mode='wait'>
                <Outlet />   
        </AnimatePresence>
        </div>
        <Footer />
        </>
    )
}

export default Home
