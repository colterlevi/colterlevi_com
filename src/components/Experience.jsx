import { motion } from "framer-motion"

const Experience = () => {

    return (
        <motion.div
            className="card"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <div>
                <h1>Work History</h1>
            </div>
            <div className="subcard">
                <p>I worked...</p>
            </div>
        </motion.div>
    )
}

export default Experience
