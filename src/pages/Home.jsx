import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import '../App.css'


const Home = () => {

    return (
        <>
        <Navbar />
        <div className='main-card'>

        <AnimatePresence mode='wait'>
                <Outlet />   
        </AnimatePresence>
        </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1  }}
                >
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </motion.div>
        </>
    )
}

export default Home
