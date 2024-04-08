import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom"

const Projects = () => {
    const navigate = useNavigate()

    return (
        <motion.div
            className="card"
            initial={{ opacity: 0, scale: .95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .75 }}
        >
            <h1>Colter's Projects</h1>
            <div className="subcard">
                <h2>
                    This button is my project.
                </h2>
                <button onClick={() => navigate('/editor')}>
                    test editor
                </button>
            </div>
        </motion.div>
    )
}

export default Projects
