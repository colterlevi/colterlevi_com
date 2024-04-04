import { useState } from 'react'
import { motion } from 'framer-motion'


const Projects = () => {
    const [count, setCount] = useState(0)

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
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </motion.div>
    )
}

export default Projects
